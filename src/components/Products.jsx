import React from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router";
import { GiCoffeeCup } from "react-icons/gi";
import CoffeeCard from "./CoffeeCard";

const Products = () => {
  const initialcoffees = useLoaderData();
  const [coffees, setCoffees] = useState(initialcoffees);
  return (
    <div className=" lg:py-24 mg:py-16 py-12 bg-[#181818] ">
      <div className="mx-auto lg:container w-full md:px-10 px-5 ">
        <div className="flex flex-col justify-center items-center space-y-3">
          <h6 className="text-[#C7B299]">--- Sip & Savor ---</h6>
          <h2 className="text-4xl text-[#E3B577] leading-tight">
            Our Popular Products
          </h2>
          <Link to="addCoffee" className=" mt-3 btn btn-active bg-[#E3B577] text-[#331A15] hover:bg-[#d4a764]">
            Add Coffee <GiCoffeeCup className="text-[#331A15]" />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffees={coffees}
              setCoffees={setCoffees}
              coffee={coffee}
            >
              {" "}
            </CoffeeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
