import React from "react";
import Image from "next/image";
import { CalendarIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { useState } from "react";

function Services() {
  // const [open, setOpen] = useRecoilState(modalState)
  const router = useRouter();
  const search = () => {router.push({
    pathname:'/search',
    query:{
      location:searchInput,
      startDate:startDate.toISOString(),
      endDate:endDate.toISOString(),
    }

  })}
  const [searchInput, setSearchInput] = useState("");

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }


  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };



  return (
    <div className=" flex bg-gray-50 h-[600px] w-full  ">
      {/* Background */}
      <div className="flex bg-gradient-to-b from-orange-500 to-orange-300  absolute right-16 -bottom-20 rounded-3xl w-[550px] h-full"></div>
      <div className="absolute right-60 bottom-0">
        <Image src="/Images/background.png" width={500} height={500} />
      </div>

      <div className=" w-1/2 relative top-40 left-20">
        <h1 className=" font-bold text-5xl mb-10 ">
          Looking to save more <br /> on your rental vehicle?
        </h1>
        <hr className="mb-10 w-20 h-3 bg-orange-500 rounded-full border-none" />
        <p className=" font-semibold text-2xl">
          Discover Zeesh rental options in {""}
          <span className=" text-orange-500">Dehradun</span> <br /> with Rent a
          Bike.
        </p>
      </div>

      <div className="w-[700px] h-[100px] bg-white items-center justify-center rounded-xl flex absolute bottom-5 left-40 gap-10 font-bold shadow-lg">
        {/* Location */}
        {/* <div className='flex items-center cursor-pointer'>
              <LocationMarkerIcon className='w-7 text-gray-500' />
              <h1>Choose Location</h1>
            </div> */}
        {/* PickUp date */}
        {/* <div  onClick={() => setOpen(true)} className='flex cursor-pointer items-center '>
           < CalendarIcon className='w-7 text-gray-500' /> 
           <h1>Pick a Date</h1>
           </div> */}

        {/* Input Box */}
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Hello there"
        />

        {/* Search Button */}
        <div onClick={search} className="cursor-pointer flex w-[150px] h-[80px] items-center justify-center rounded-xl bg-blue-400 text-xl ">
          <button  className="font-bold text-white">Search</button>
        </div>
      {searchInput && (
        <div>
          <DateRangePicker ranges={[selectionRange]} 
           minDate = {new Date()}
           rangeColors ={["#FD5B61"]}
           onChange={handleSelect}
           />
         
        </div>
      )}
      </div>
    </div>
  );
}

export default Services;
