import React from "react";

const AddCoffee = () => {
    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        // console.log(formData.entries); 
        const newCoffee = Object.formEntries(formData.entries())
        console.log(newCoffee);

        // send db data to the database

    }
  return (
    <div className="mx-auto max-w-7xl flex justify-center items-center px-3 py-10 sm:py-16 md:py-24">
      <div className="card bg-base-100 w-full shadow-2xl">
        <div className="card-body p-4 sm:p-6 md:p-16 space-y-8">
          
          {/* Header */}
          <div className="flex flex-col items-center space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold">
              Add New Coffee
            </h2>
            <p className="text-sm sm:text-base text-center max-w-xl">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleAddCoffee}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input w-full"
                  placeholder="Enter coffee name"
                />
              </fieldset>

              <fieldset className="fieldset">
                <label className="label">Chef</label>
                <input
                  type="text"
                  name="chef"
                  className="input w-full"
                  placeholder="Enter coffee chef"
                />
              </fieldset>

              <fieldset className="fieldset">
                <label className="label">Supplier</label>
                <input
                  type="text"
                  name="supplier"
                  className="input w-full"
                  placeholder="Enter coffee supplier"
                />
              </fieldset>

              <fieldset className="fieldset">
                <label className="label">Price</label>
                <input
                  type="text"
                  name="price"
                  className="input w-full"
                  placeholder="Enter coffee price"
                />
              </fieldset>

              <fieldset className="fieldset">
                <label className="label">Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  className="input w-full"
                  placeholder="Enter coffee quantity"
                />
              </fieldset>

              <fieldset className="fieldset">
                <label className="label">Details</label>
                <input
                  type="text"
                  name="details"
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
                className="input w-full"
                placeholder="Enter photo URL"
              />

              <button className="btn w-full mt-4 bg-[#D2B48C] text-[#331A15]">
                Add Coffee
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
