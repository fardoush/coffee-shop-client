import React from "react";

const InstagramGallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
      title: "Espresso",
    },
    {
      src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
      title: "Latte Art",
    },
    {
      src: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
      title: "Cappuccino",
    },
    {
      src: "https://i.ibb.co.com/cSDynkYv/photo-1760175445000-0e01e193d1cd.avif",
      title: "Coffee Beans",
    },
    {
      src: "https://i.ibb.co.com/ycQpgzqH/premium-photo-1723618914302-ecc2bb8aea6a.avif",
      title: "Cold Brew",
    },
    {
      src: "https://i.ibb.co.com/5hyQFGbN/photo-1610632380989-680fe40816c6.avif",
      title: "Mocha",
    },
    {
      src: "https://i.ibb.co.com/p6kCYNN4/photo-1517701550927-30cf4ba1dba5.avif",
      title: "Mocha",
    },
    {
      src: "https://i.ibb.co.com/7t0t5MRR/photo-1567309966795-5ad24aa39971.avif",
      title: "Mocha",
    },
    // {
    //   src: "https://i.ibb.co.com/wrpGJBCq/photo-1580933073521-dc49ac0d4e6a.avif",
    //   title: "Mocha",
    // },
    {
      src: "https://i.ibb.co.com/TqL6WFyK/photo-1549652127-2e5e59e86a7a.avif",
      title: "Mocha",
    },
  ];
  return (
    <section className="bg-[#121212] py-20">
      <div className="container mx-auto px-5 md:px-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#E3B577]">Coffee Gallery</h2>
          <p className="text-[#C7B299] mt-4">Fresh brews & beautiful moments</p>
        </div>

        {/* Masonry Layout */}
        <div
          className="
          columns-1 
          sm:columns-2 
          lg:columns-3 
          gap-6
        "
        >
          {images.map((item, index) => (
            <div
              key={index}
              className="mb-6 break-inside-avoid group relative overflow-hidden rounded-2xl"
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>

              {/* Text */}
              <div className="absolute bottom-5 left-5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-lg font-semibold text-[#E3B577]">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
