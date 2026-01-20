import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { _id, name, chef, supplier, price, quantity, details, photo } =
    useLoaderData();
  const handleUpdateCoffee = (e) => {
    // const coffee = useLoaderData();
    e.preventDefault();
    const form = e.target;
    console.log(form);
    const formData = new FormData(form);
    const updateCoffee = Object.fromEntries(formData.entries());
    console.log(updateCoffee);

    // send updated coffee to the db
    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "center-center",
            icon: "success",
            title: "Coffee updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="mx-auto max-w-7xl flex justify-center items-center px-3 py-10 sm:py-16 md:py-24">
      <div className="card bg-base-100 w-full shadow-2xl">
        <div className="card-body p-4 sm:p-6 md:p-16 space-y-8">
          {/* Header */}
          <div className="flex flex-col items-center space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold">
              Update Existing Coffee Details
            </h2>
            <p className="text-sm sm:text-base text-center max-w-xl">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleUpdateCoffee}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  className="input w-full"
                  placeholder="Enter coffee name"
                />
              </fieldset>

              <fieldset className="fieldset">
                <label className="label">Chef</label>
                <input
                  type="text"
                  name="chef"
                  defaultValue={chef}
                  className="input w-full"
                  placeholder="Enter coffee chef"
                />
              </fieldset>

              <fieldset className="fieldset">
                <label className="label">Supplier</label>
                <input
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  className="input w-full"
                  placeholder="Enter coffee supplier"
                />
              </fieldset>

              <fieldset className="fieldset">
                <label className="label">Price</label>
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  className="input w-full"
                  placeholder="Enter coffee price"
                />
              </fieldset>

              <fieldset className="fieldset">
                <label className="label">Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  defaultValue={quantity}
                  className="input w-full"
                  placeholder="Enter coffee quantity"
                />
              </fieldset>

              <fieldset className="fieldset">
                <label className="label">Details</label>
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  className="input w-full"
                  placeholder="Enter coffee details"
                />
              </fieldset>
            </div>

            {/* Photo + Button */}
            <fieldset className="fieldset mt-5">
              <label className="label">Photo</label>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                className="input w-full"
                placeholder="Enter photo URL"
              />

              <button className="btn w-full mt-4 bg-[#D2B48C] text-[#331A15]">
                Update Coffee Details
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
