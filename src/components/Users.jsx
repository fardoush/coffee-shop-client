import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { IoIosEye } from "react-icons/io";
import { MdEdit, MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const Users = () => {
  const initialUser = useLoaderData();
  const [users, setUsers] = useState(initialUser);
  console.log(initialUser);

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
              console.log("After delete", data);

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
    <div className=" mx-auto container lg:py-24 md:py-16 py-12">
      <h2 className="text-center mb-6 text-4xl">Total User: {users.length}</h2>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th> {index + 1} </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.address}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <th>
                  <div className="join space-x-2">
                    <button className="btn  bg-indigo-200 border-none rounded-none">
                      <IoIosEye className="text-indigo-600" size={24} />
                    </button>
                    <button className="btn  bg-emerald-200 border-none rounded-none">
                      <MdEdit className="text-emerald-600" size={24} />
                    </button>
                    <button
                      onClick={() => handleUserDelete(user._id)}
                      className="btn  bg-rose-200 border-none rounded-none"
                    >
                      <MdDelete className="text-rose-600" size={24} />
                    </button>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
