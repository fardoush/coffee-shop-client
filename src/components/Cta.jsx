import React from "react";

const Cta = () => {
  return (
    <section
      className="hero relative min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 sm:px-10 text-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1612346903007-b5ac8bb135bb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // direct image URL
      }}
    >
      <div className="hero-overlay absolute inset-0  bg-opacity-20 z-0"></div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div> */}

      {/* Content */}
      <div className="relative z-10 max-w-3xl space-y-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#E3B577]">
          Love Coffee? Join Our Community!
        </h2>

        <p className="text-[#C7B299] text-base sm:text-lg md:text-xl">
          Subscribe to our newsletter to get the latest updates, exclusive
          offers, and fresh coffee vibes delivered straight to your inbox.
        </p>

        <a
          href="#subscribe"
          className="inline-block bg-[#E3B577] text-[#331A15] hover:bg-[#d4a764] font-semibold px-6 py-3 md:px-8 md:py-3 rounded transition-all duration-300 text-lg sm:text-xl"
        >
          Subscribe Now
        </a>
      </div>
    </section>
  );
};

export default Cta;
