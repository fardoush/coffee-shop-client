import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router";

const SignUp = () => {
  const { createUser } = use(AuthContext);
  // console.log(createUser);

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
        // console.log(result.user);
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
            // console.log("After profile save", data);
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
    <div className="lg:py-24 md:py-16 py-12 bg-[#1a1a1a]">
  <div className="card mx-auto max-w-md w-full shadow-2xl bg-[#2a2a2a] border border-[#E3B577]/30 md:px-10 px-5">
    <div className="card-body p-6 md:p-8">
      
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#E3B577]">
        Create Account
      </h1>
      <p className="text-center text-[#C7B299] text-sm mt-2">
        Join our premium coffee experience ☕
      </p>

      {/* Form */}
      <form onSubmit={handleSignUp} className="space-y-4 mt-6">
        
        {/* Name */}
        <div>
          <label className="label text-[#C7B299]">Name</label>
          <input
            type="text"
            name="name"
            className="input w-full bg-transparent border-[#C7B299]/40 
            focus:border-[#E3B577] focus:outline-none text-white"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="label text-[#C7B299]">Email</label>
          <input
            type="email"
            name="email"
            className="input w-full bg-transparent border-[#C7B299]/40 
            focus:border-[#E3B577] focus:outline-none text-white"
            placeholder="your@email.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="label text-[#C7B299]">Phone</label>
          <input
            type="tel"
            name="phone"
            required
            className="input w-full bg-transparent border-[#C7B299]/40 
            focus:border-[#E3B577] focus:outline-none text-white"
            placeholder="01XXXXXXXXX"
          />
        </div>

        {/* Photo */}
        <div>
          <label className="label text-[#C7B299]">Photo URL</label>
          <input
            type="text"
            name="photo"
            className="input w-full bg-transparent border-[#C7B299]/40 
            focus:border-[#E3B577] focus:outline-none text-white"
            placeholder="Profile photo link"
          />
        </div>

        {/* Address */}
        <div>
          <label className="label text-[#C7B299]">Address</label>
          <input
            type="text"
            name="address"
            className="input w-full bg-transparent border-[#C7B299]/40 
            focus:border-[#E3B577] focus:outline-none text-white"
            placeholder="Your address"
          />
        </div>

        {/* Password */}
        <div>
          <label className="label text-[#C7B299]">Password</label>
          <input
            type="password"
            name="password"
            className="input w-full bg-transparent border-[#C7B299]/40 
            focus:border-[#E3B577] focus:outline-none text-white"
            placeholder="••••••••"
          />
        </div>

        {/* Forgot */}
        {/* <div className="text-right">
          <a className="text-sm text-[#E3B577] hover:underline">
            Forgot password?
          </a>
        </div> */}

        {/* Button */}
        <button
          className="btn w-full mt-4 bg-[#E3B577] text-[#331A15] hover:bg-[#d4a764] font-bold transition-all duration-300"
        >
          Sign Up
        </button>
          {/* Sign In Text Link */}
        <p className="text-center text-sm text-[#C7B299] mt-3">
          Already have an account?{" "}
          <Link
            to="/signin" 
            className="text-[#E3B577] hover:underline font-semibold"
          >
            Sign In
          </Link>
        </p>
      </form>

      <ToastContainer />
    </div>
  </div>
</div>

  );
};

export default SignUp;
