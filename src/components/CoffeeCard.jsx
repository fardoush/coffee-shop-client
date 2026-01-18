import React from "react";
import { IoEye } from "react-icons/io5";
import { MdEdit, MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, photo, name, chef, price, quantity } = coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="bg-[#F5F4F1] rounded-lg shadow-sm p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
      {/* Image */}
      <div className="w-28 h-36 flex-shrink-0">
        <img src={photo} alt={name} className="w-full h-full object-contain" />
      </div>

      {/* Content */}
      <div className="flex-1 w-full text-center sm:text-left space-y-1">
        <h2 className="text-lg font-semibold text-[#1B1A1A]">
          Name: <span className="font-normal">{name}</span>
        </h2>
        <p className="text-sm text-gray-700">
          Chef: <span className="font-medium">{chef}</span>
        </p>
        <p className="text-sm text-gray-700">
          Price: <span className="font-medium">{price} Taka</span>
        </p>
        <p className="text-sm text-gray-700">
          Quantity: <span className="font-medium">{quantity}</span>
        </p>
      </div>

      {/* Actions */}
      <div className="flex sm:flex-col gap-2">
        <button className="btn btn-sm bg-[#D2B48C] hover:bg-[#c3a678] text-white border-0 shadow-none">
          <IoEye size={18} />
        </button>
        <button className="btn btn-sm bg-[#3C393B] hover:bg-[#2f2c2d] text-white border-0 shadow-none">
          <MdEdit size={18} />
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm bg-[#EA4744] hover:bg-[#d63d3a] text-white border-0 shadow-none"
        >
          <MdDelete size={18} />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
