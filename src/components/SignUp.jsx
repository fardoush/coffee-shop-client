import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";

const SignUp = () => {
  const { createUser } = use(AuthContext);
  console.log(createUser);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries(),
    );

    // const email = formData.get("email");
    // const password = formData.get("password");
    // console.log(email, password, userProfile);

    // create user in the firebase

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const userProfile = {
          email,
          ...restFormData,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        // save profile info in the database
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("After profile save", data);
            if (data.insertedId) {
              toast.success("Your account is created.");
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 mx-auto max-w-md shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold text-center">Sign Up now!</h1>

        <form onSubmit={handleSignUp} className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input w-full"
            placeholder="Name"
          />
          <label className="label">Email</label>
          <input
            type="text"
            name="email"
            className="input w-full"
            placeholder="E-mail"
          />
          <label className="label">Phone</label>
          <input
            type="tel"
            name="phone"
            className="input w-full validator tabular-nums"
            required
            placeholder="Phone"
            pattern="[0-9]*"
            minLength="10"
            maxLength="10"
            title="Must be 10 digits"
          />
          <label className="label">Photo</label>
          <input
            type="text"
            name="photo"
            className="input w-full"
            placeholder="Photo URL"
          />
          <label className="label">Address</label>
          <input
            type="text"
            name="address"
            className="input w-full"
            placeholder="Address"
          />
          <label className="label">Password</label>
          <input
            type="text"
            name="password"
            className="input w-full"
            placeholder="Password"
          />

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignUp;
