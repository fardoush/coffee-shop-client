import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router";

const SignIn = () => {
  const { signInUser } = use(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    // firebase sign in send
    signInUser(email, password)
      .then((result) => {
        // console.log(result.user);
        const signInInfo = {
          email,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        // update last signin to the db
        fetch("http://localhost:3000/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(signInInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log("after update patch ", data);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="lg:py-24 md:py-16 py-12 bg-[#1a1a1a]">
      <div
        className="card mx-auto max-w-md w-full shadow-2xl 
      bg-[#2a2a2a] border border-[#E3B577]/30 md:px-10 px-5"
      >
        <div className="card-body p-6 md:p-8">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-center text-[#E3B577]">
            Sign In
          </h1>
          <p className="text-center text-[#C7B299] text-sm mt-2">
            Welcome back to your coffee space ☕
          </p>

          {/* Form */}
          <form onSubmit={handleSignIn} className="space-y-3 mt-6">
            {/* Email */}
            <div>
              <label className="label text-[#C7B299]">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full bg-transparent 
              border-[#C7B299]/40 text-white
              focus:border-[#E3B577] focus:outline-none"
                placeholder="your@email.com"
              />
            </div>

            {/* Password */}
            <div>
              <label className="label text-[#C7B299]">Password</label>
              <input
                type="password"
                name="password"
                className="input w-full bg-transparent 
              border-[#C7B299]/40 text-white
              focus:border-[#E3B577] focus:outline-none"
                placeholder="••••••••"
              />
            </div>

            {/* Forgot password */}
            {/* <div className="flex justify-between items-center">
              <a className="text-sm text-[#E3B577] hover:underline">
                Forgot password?
              </a>
            </div> */}

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-full mt-4 
            bg-[#E3B577] text-[#331A15] hover:bg-[#d4a764] font-bold transition-all duration-300"
            >
              Login
            </button>

            {/* Sign Up Text Link */}
            <p className="text-center text-sm text-[#C7B299] mt-3">
              Don't have an account?{" "}
              <Link
                to="/signup" 
                className="text-[#E3B577] hover:underline font-semibold"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
