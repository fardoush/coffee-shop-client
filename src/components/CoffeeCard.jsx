import React from "react";
import { IoEye } from "react-icons/io5";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, photo, name, chef, price, quantity } = coffee;

  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      // console.log(result.isConfirmed);
      if (result.isConfirmed) {
        // start deleting the coffee
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log("After delete", data);
            Swal.fire({
              title: "Deleted!",
              text: "Your Coffee has been deleted.",
              icon: "success",
            });

            // remove the coffee from the state [delete id bade id dawa]
            const remainingCoffees = coffees.filter((cof) => cof._id !== _id);
            setCoffees(remainingCoffees);
          });
      }
    });
  };

  return (
    <div className="bg-[#1C1B18] rounded-lg shadow-sm p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
      {/* Image */}
      <div className="w-28 h-36 flex-shrink-0">
        <img src={photo} alt={name} className="w-full h-full object-contain" />
      </div>

      {/* Content */}
      <div className="flex-1 w-full text-center sm:text-left space-y-3">
        <h5 className="text-lg font-semibold text-[#9C8B75]">
          Name: <span className="font-normal">{name}</span>
        </h5>
        <p className="text-sm text-[#C7B299]">
          Chef: <span className="font-medium">{chef}</span>
        </p>
        <p className="text-sm text-[#C7B299]">
          Price: <span className="font-medium">{price} Taka</span>
        </p>
        <p className="text-sm text-[#C7B299]">
          Quantity: <span className="font-medium">{quantity}</span>
        </p>
      </div>

      {/* Actions */}
      <div className="flex sm:flex-col gap-2">
        <Link to={`/coffee/${_id}`}>
          {" "}
          <button className="btn btn-sm bg-[#3A3228] hover:bg-[#4A4033] text-[#E6D3A3] border-0 shadow-none">
            <IoEye size={18} />
          </button>
        </Link>

        <Link to={`/updateCoffee/${_id}`}>
          <button className="btn btn-sm bg-[#5B7C99] hover:bg-[#4A6880] text-white border-0 shadow-none">
            <MdEdit size={18} />
          </button>
        </Link>

        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm bg-[#8B3A2E] hover:bg-[#d63d3a] text-white border-0 shadow-none"
        >
          <MdDelete size={18} />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
