import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen  "
      style={{
        backgroundImage: "url(https://i.ibb.co.com/hpnz7y1/6.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="lg:container w-full md:px-10 px-5  text-neutral-content text-left">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold text-[#E3B577]">Would you like a Cup of Delicious Coffee?</h1>
          <p className="mb-5 lg:w-[724px] text-[#f7e2c7] tracking-wide text-base">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
          </p>
          <button className="btn bg-[#E3B577] text-[#331A15] hover:bg-[#d4a764]  font-bold">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
