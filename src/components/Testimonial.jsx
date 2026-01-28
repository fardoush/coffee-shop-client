import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Alice Johnson",
      designation: "Regular Customer",
      quote:
        "The coffee here is amazing! I love the cozy atmosphere and friendly staff.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Michael Smith",
      designation: "Coffee Enthusiast",
      quote:
        "Best coffee in town! The baristas know their craft and make every cup perfect.",
      image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sarah Lee",
      designation: "Local Blogger",
      quote:
        "A hidden gem! Great drinks, great vibes, and a perfect spot to relax.",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <section className="bg-[#1a1a1a] py-24 relative">
      <div className="max-w-6xl mx-auto px-5 md:px-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#E3B577] mb-12">
          What Our Customers Say
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="relative p-8 flex flex-col items-center justify-between h-full text-white  ">
                {/* Quote Icon */}
                <FaQuoteLeft className="text-[#E3B577] text-4xl mb-4" />

                {/* Profile */}
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 text-[#E3B577] shadow-lg mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Quote Text */}
                <p className="text-[#C7B299] italic text-base md:text-lg mb-6 relative">
                  {t.quote}
                </p>

                {/* Name & Designation */}
                <h3 className="text-xl font-bold text-[#E3B577]">{t.name}</h3>
                <p className="text-sm text-[#C7B299] font-semibold">
                  {t.designation}
                </p>

                {/* Closing Quote Icon */}
                {/* <FaQuoteRight className="text-[#E3B577] text-4xl mt-4" /> */}
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation */}
          <div className="swiper-button-prev  text-3xl absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer hover:scale-125 transition-transform duration-300">
            <IoIosArrowBack className="text-[#E3B577]" />
          </div>
          <div className="swiper-button-next text-[#E3B577] text-3xl absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer hover:scale-125 transition-transform duration-300">
           <IoIosArrowForward  className="text-[#E3B577]"/>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
