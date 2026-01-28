import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { IoIosEye } from "react-icons/io";
import { MdEdit, MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const Users = () => {
  const initialUser = useLoaderData();
  const [users, setUsers] = useState(initialUser);
  // console.log(initialUser);

  const handleUserDelete = (id) => {
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
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingUsers = users.filter(user => user._id !== id);
              setUsers(remainingUsers);
              // console.log("After delete", data);

                // TODO Delete user from firebase 

              Swal.fire({
                title: "Deleted!",
                text: "Your user has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="bg-[#1a1a1a]">
      <div className="mx-auto lg:container w-full  md:px-10 px-5 py-10 sm:py-16 md:py-24 ">
  
  {/* Header */}
  <div className="mb-8 text-center">
    <h2 className="text-3xl md:text-4xl font-semibold text-[#E3B577]">
      Users Management
    </h2>
    <p className="mt-2 text-[#C7B299]">
      Total Users: <span className="font-semibold">{users.length}</span>
    </p>
  </div>

  {/* Table Wrapper */}
  <div
    className="overflow-x-auto rounded-xl shadow-2xl
    bg-[#2a2a2a] border border-[#E3B577]/30"
  >
    <table className="table w-full text-white">

      {/* Table Head */}
      <thead>
        <tr className="text-[#C7B299] border-b border-[#E3B577]/20">
          <th>No</th>
          <th>User</th>
          <th>Email</th>
          <th>Phone</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>

      {/* Table Body */}
      <tbody>
        {users.map((user, index) => (
          <tr
            key={user._id}
            className="border-b border-[#E3B577]/10 hover:bg-[#1f1f1f] transition"
          >
            <th className="text-[#C7B299]">{index + 1}</th>

            {/* User Info */}
            <td>
              <div className="flex items-center gap-4">
                <div className="avatar">
                  <div className="h-12 w-12 rounded-lg overflow-hidden border border-[#E3B577]/30">
                    <img
                      src={user.photo}
                      alt={user.name}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {user.name}
                  </div>
                  <div className="text-sm text-[#C7B299]">
                    {user.address}
                  </div>
                </div>
              </div>
            </td>

            <td className="text-[#C7B299]">{user.email}</td>
            <td className="text-[#C7B299]">{user.phone}</td>

            {/* Actions */}
            <td>
              <div className="flex justify-center gap-2">

                {/* View */}
                <button
                  className="p-2 rounded-md 
                  bg-[#E3B577]/20 hover:bg-[#E3B577]/40 
                  transition"
                >
                  <IoIosEye className="text-[#E3B577]" size={22} />
                </button>

                {/* Edit */}
                <button
                  className="p-2 rounded-md 
                  bg-emerald-500/20 hover:bg-emerald-500/40 
                  transition"
                >
                  <MdEdit className="text-emerald-400" size={22} />
                </button>

                {/* Delete */}
                <button
                  onClick={() => handleUserDelete(user._id)}
                  className="p-2 rounded-md 
                  bg-rose-500/20 hover:bg-rose-500/40 
                  transition"
                >
                  <MdDelete className="text-rose-400" size={22} />
                </button>

              </div>
            </td>
          </tr>
        ))}
      </tbody>

    </table>
  </div>
</div>
    </div>

  );
};

export default Users;
