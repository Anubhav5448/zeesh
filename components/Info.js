import Image from "next/image";
import React from "react";

function Info() {
  return (
    <div>
      <main className="flex mx-14  ">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">139 Bike stations across Dehradun</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Bikes in Dehradun
          </h1>
        </section>
      </main>

      <div className="flex w-sceen">
        <div className="relative h-40 w-60 my-10 mx-16 ">
          <Image src="/Images/Bullet.jpg" layout="fill" objectFit="cover" />
        </div>
        <div className="flex flex-col w-3/5  justify-center">
          <h1 className="font-bold text-2xl  w-60">Royal Enfield </h1>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            totam optio incidunt ducimus dolor error nihil cumque ad libero
            maiores corrupti pariatur quo velit debitis iure odio consectetur
            nesciunt doloremque expedita mollitia eveniet fugiat?
          </p>
        </div>
      </div>
      <div className="flex w-sceen">
        <div className="relative h-40 w-60 my-10 mx-16 ">
          <Image src="/Images/Bullet.jpg" layout="fill" objectFit="cover" />
        </div>
        <div className="flex flex-col w-3/5  justify-center">
          <h1 className="font-bold text-2xl  w-60">Royal Enfield </h1>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            totam optio incidunt ducimus dolor error nihil cumque ad libero
            maiores corrupti pariatur quo velit debitis iure odio consectetur
            nesciunt doloremque expedita mollitia eveniet fugiat?
          </p>
        </div>
      </div>
      <div className="flex w-sceen">
        <div className="relative h-40 w-60 my-10 mx-16 ">
          <Image src="/Images/Bullet.jpg" layout="fill" objectFit="cover" />
        </div>
        <div className="flex flex-col w-3/5  justify-center">
          <h1 className="font-bold text-2xl  w-60">Royal Enfield </h1>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            totam optio incidunt ducimus dolor error nihil cumque ad libero
            maiores corrupti pariatur quo velit debitis iure odio consectetur
            nesciunt doloremque expedita mollitia eveniet fugiat?
          </p>
        </div>
      </div>
      <div className="flex w-sceen">
        <div className="relative h-40 w-60 my-10 mx-16 ">
          <Image src="/Images/Bullet.jpg" layout="fill" objectFit="cover" />
        </div>
        <div className="flex flex-col w-3/5  justify-center">
          <h1 className="font-bold text-2xl  w-60">Royal Enfield </h1>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            totam optio incidunt ducimus dolor error nihil cumque ad libero
            maiores corrupti pariatur quo velit debitis iure odio consectetur
            nesciunt doloremque expedita mollitia eveniet fugiat?
          </p>
        </div>
      </div>
      <div className="flex w-sceen">
        <div className="relative h-40 w-60 my-10 mx-16 ">
          <Image src="/Images/Bullet.jpg" layout="fill" objectFit="cover" />
        </div>
        <div className="flex flex-col w-3/5  justify-center">
          <h1 className="font-bold text-2xl  w-60">Royal Enfield </h1>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            totam optio incidunt ducimus dolor error nihil cumque ad libero
            maiores corrupti pariatur quo velit debitis iure odio consectetur
            nesciunt doloremque expedita mollitia eveniet fugiat?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
