import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    // console.log(form);
    const formData = new FormData(form);
    // console.log(formData.entries());

    const newCoffee = Object.fromEntries(formData.entries());
    // console.log(newCoffee);

    // send database to the

    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("After coffee data", data);
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee added successfully!☕",
            icon: "success",
            draggable: true,
            confirmButtonColor: "#E3B577",
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="py-10 sm:py-16 md:py-24 bg-[#1a1a1a] ">
      <div
        className="mx-auto lg:container  w-full flex justify-center items-center 
 md:px-10 px-5"
      >
        <div
          className="card w-full shadow-2xl 
  bg-[#2a2a2a] border border-[#E3B577]/30"
        >
          <div className="card-body p-4 sm:p-6 md:p-16 space-y-8">
            {/* Header */}
            <div className="flex flex-col items-center space-y-3">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl 
        text-center font-semibold text-[#E3B577]"
              >
                Add New Coffee
              </h2>
              <p className="text-sm sm:text-base text-center max-w-xl text-[#C7B299]">
                It is a long established fact that a reader will be distraceted
                by the readable content of a page when looking at its layout.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleAddCoffee}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Name */}
                <fieldset className="fieldset">
                  <label className="label text-[#C7B299]">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input w-full bg-transparent 
              border-[#C7B299]/40 text-white
              focus:border-[#E3B577] focus:outline-none"
                    placeholder="Enter coffee name"
                  />
                </fieldset>

                {/* Chef */}
                <fieldset className="fieldset">
                  <label className="label text-[#C7B299]">Chef</label>
                  <input
                    type="text"
                    name="chef"
                    className="input w-full bg-transparent 
              border-[#C7B299]/40 text-white
              focus:border-[#E3B577] focus:outline-none"
                    placeholder="Enter coffee chef"
                  />
                </fieldset>

                {/* Supplier */}
                <fieldset className="fieldset">
                  <label className="label text-[#C7B299]">Supplier</label>
                  <input
                    type="text"
                    name="supplier"
                    className="input w-full bg-transparent 
              border-[#C7B299]/40 text-white
              focus:border-[#E3B577] focus:outline-none"
                    placeholder="Enter coffee supplier"
                  />
                </fieldset>

                {/* Price */}
                <fieldset className="fieldset">
                  <label className="label text-[#C7B299]">Price</label>
                  <input
                    type="text"
                    name="price"
                    className="input w-full bg-transparent 
              border-[#C7B299]/40 text-white
              focus:border-[#E3B577] focus:outline-none"
                    placeholder="Enter coffee price"
                  />
                </fieldset>

                {/* Quantity */}
                <fieldset className="fieldset">
                  <label className="label text-[#C7B299]">Quantity</label>
                  <input
                    type="text"
                    name="quantity"
                    className="input w-full bg-transparent 
              border-[#C7B299]/40 text-white
              focus:border-[#E3B577] focus:outline-none"
                    placeholder="Enter coffee quantity"
                  />
                </fieldset>

                {/* Details */}
                <fieldset className="fieldset">
                  <label className="label text-[#C7B299]">Details</label>
                  <input
                    type="text"
                    name="details"
                    className="input w-full bg-transparent 
              border-[#C7B299]/40 text-white
              focus:border-[#E3B577] focus:outline-none"
                    placeholder="Enter coffee details"
                  />
                </fieldset>
              </div>

              {/* Photo + Button */}
              <fieldset className="fieldset mt-5">
                <label className="label text-[#C7B299]">Photo</label>
                <input
                  type="text"
                  name="photo"
                  className="input w-full bg-transparent 
            border-[#C7B299]/40 text-white
            focus:border-[#E3B577] focus:outline-none"
                  placeholder="Enter photo URL"
                />

                <button
                  className="btn w-full mt-4 
            bg-[#E3B577] text-black 
            hover:bg-[#C7B299] transition-all duration-300"
                >
                  Add Coffee
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
