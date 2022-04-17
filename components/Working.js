import { CalendarIcon, MapIcon, PencilAltIcon } from "@heroicons/react/outline";
import React from "react";

function Working() {
  return (
    <div className="flex h-screen justify-center items-center text-center">
     
        <h1 className="font-semibold text-2xl relative bottom-20 left-[500px]">We works in 3 steps</h1>


      <div className="flex relative top-20 right-40 gap-60">
        {/* Choose your location */}
        <div className="h-[200px] w-[200px] text-center flex flex-col justify-center items-center ">
          <MapIcon className=" w-28 p-4 text-orange-400 bg-white rounded-2xl shadow-lg" />
        <h1 className="font-semibold mt-3 text-lg ">Choose a Location</h1>
        </div>
        {/* choose date */}
        <div className="h-[200px] w-[200px] text-center flex flex-col justify-center items-center ">
          <CalendarIcon className=" w-28 p-4 bg-gradient-to-b from-orange-400 to-orange-300 text-white rounded-2xl shadow-xl" />
          <h1 className="font-semibold mt-3 text-lg ">Pickup Date</h1>
        </div>
        {/* Book your vehicle */}
        <div className="h-[200px] w-[200px] text-center flex flex-col justify-center items-center ">
          <PencilAltIcon className="w-28 h-28 p-4 text-orange-400 bg-white rounded-2xl shadow-lg" />
          <h1 className=" font-semibold mt-3 text-lg ">Book Your Vehicle</h1>
        </div>
      </div>
    </div>
  );
}

export default Working;
