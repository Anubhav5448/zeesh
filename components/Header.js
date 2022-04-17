import Image from "next/image";
import React from "react";
import { LocationMarkerIcon } from '@heroicons/react/outline'
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

function Header() {

  const { data: session } = useSession();
  const router = useRouter();


  return (
    <div className=" flex items-center justify-around w-full h-16 ">
      <div onClick={() => router.push("/")} className="flex justify-center items-center cursor-pointer">
       
        <Image src="/Images/zeesh.png" width={120} height={80} alt="logo" />

      </div>

      <div className=" font-OpenSans font-semibold flex py-2.5 w-1/2 list-none justify-around relative  ">
        <li className="cursor-pointer hover:underline decoration-4 underline-offset-4  ">Home</li>
        <li className="cursor-pointer hover:underline decoration-4 underline-offset-4 ">About</li>
        <li className="cursor-pointer hover:underline decoration-4 underline-offset-4  relative inline-block hover:block  ">
          Rental Items
          <div className="flex flex-col hidden absolute z-10">
            <a className="block hover:bg-white " href="">Bike</a>
            <a className="block hover:bg-white " href="">Camera</a>
            <a className="block hover:bg-white " href="">Camp</a>
          </div>

        </li>
        <li className="cursor-pointer hover:underline decoration-4 underline-offset-4 ">Contact</li>
      </div>


      {session ? (

        <img onClick={signOut} src={session.user.image} alt="profile picture" className="h-10 rounded-full cursor-pointer" />

      ) : (

        <div className="flex gap-4 justify-center items-center text-lg">
          {/* <button className="bg-white w-20 h-10  flex justify-center items-center rounded shadow-sm font-semibold text-blue-400">Sign Up</button> */}
          <button onClick={signIn} className="bg-blue-400 w-20 h-10  flex justify-center items-center rounded shadow-sm font-semibold text-white ">Sign In</button>
        </div>

      )}



    </div>
  );
}

export default Header;
