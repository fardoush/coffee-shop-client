import React from "react";

const About = () => {
  return (
    <section className="bg-[#181818] py-20">
      <div className="mx-auto lg:container w-full md:px-10 px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
 <div className="relative w-full h-[360px] md:h-[460px] lg:h-[520px] overflow-hidden rounded-xl flex">

  {/* 2nd Image – 60% */}
  <div className="w-[60%] h-full ml-auto">
    <img
      src="https://i.ibb.co.com/cXbxRD5W/14.jpg"
      alt="Coffee Shop"
      className="w-full h-full object-cover object-bottom"
    />
  </div>

  {/* 1st Image – 40% (bottom-0) */}
  <img
    src="https://i.ibb.co.com/zTG2vqkG/5.png"
    alt="Decoration"
    className="
      absolute
      bottom-0
      left-0
      w-[40%]
      h-full
      z-20
      opacity-60
    "
  />
</div>



          {/* Content */}
          <div className="space-y-5 text-[#C7B299]">
            <h6 className="text-sm tracking-widest uppercase">
              --- About Us ---
            </h6>

            <h2 className="text-4xl font-semibold text-[#E3B577] leading-tight">
              We serve more than just coffee
            </h2>

            <p className="text-base leading-relaxed">
              At our coffee shop, we believe coffee is an experience, not just a
              drink. From carefully selected beans to perfectly crafted brews,
              every cup is made with passion and precision.
            </p>

            <p className="text-base leading-relaxed">
              Founded with a love for rich flavors and warm conversations, our
              coffee shop is a place where quality meets comfort.
            </p>

            <ul className="space-y-2">
              <li>☕ Premium quality coffee beans</li>
              <li>👨‍🍳 Expert & friendly baristas</li>
              <li>🌿 Fresh & natural ingredients</li>
              <li>🏠 Cozy & relaxing environment</li>
            </ul>

            <button className="btn mt-4 bg-[#E3B577] text-[#331A15] hover:bg-[#d4a764]">
              Explore Our Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
