import React from "react";
import { useLoaderData } from "react-router";
import { GiCoffeeCup } from "react-icons/gi";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const coffees = useLoaderData();
  console.log(coffees);

  return (
    <div>
      home
      <div className="mx-auto max-w-7xl ">
        <div className="flex flex-col justify-center items-center space-y-3">
          <h6 className="">--- Sip & Savor ---</h6>
          <h2 className="text-4xl">Our Popular Products</h2>
          <button className="btn btn-active bg-[#E3B577] text-[#331A15]">
            Add Coffee <GiCoffeeCup className="text-[#331A15]" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
{
    coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}> </CoffeeCard>)
}
        </div>
      </div>
    </div>
  );
};

export default Home;
