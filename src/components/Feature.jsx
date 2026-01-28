import React from "react";
import { GiCoffeeCup, GiCoffeeBeans } from "react-icons/gi";
import { BiShieldQuarter } from "react-icons/bi";
import { SiBuymeacoffee } from "react-icons/si";

const Feature = () => {
  const features = [
    {
      icon: <GiCoffeeCup />,
      title: "Awesome Aroma",
      description:
        "You will definitely be a fan of the design & aroma of your coffee",
    },
    {
      icon: <BiShieldQuarter />,
      title: "High Quality",
      description: "We served the coffee to you maintaining the best quality",
    },
    {
      icon: <GiCoffeeBeans />,
      title: "Pure Grades",
      description:
        "The coffee is made of the green coffee beans which you will love",
    },
    {
      icon: <SiBuymeacoffee />,
      title: "Proper Roasting",
      description:
        "Your coffee is brewed by first roasting the green coffee beans",
    },
  ];
  return (
    <div className="bg-[#121212] text-white lg:py-24 md:py-16 py-12">
      <div className="lg:container w-full mx-auto  md:px-10 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-left gap-8">
        {features.map((feature, index) => (
          <div key={index} className="space-y-4">
            <div className="text-6xl text-[#f8bd6f]">{feature.iconn}</div>
            <h4 className="text-4xl text-[#E3B577]">{feature.title}</h4>
            <p className="text-[#C7B299]">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
