import Image from "next/image";
import React from "react";

const FourthPart = () => {

    const data = [
      {
        name: "Karanpreet Singh",
        role: "Founder",
        mainRole: "Founder",
        email: "sguf@discoxspot.com",
        img: "/sfera2.png",
      },
      {
        name: "Alex Grab",
        role: "Founder",
        email: "alexgrab@discoxspot.com",
        img: "/sfera2.png",
      },
      {
        name: "Info",
        role: "Information",
        email: "info@discoxspot.com",
        img: "/sfera2.png",
      },
    ];
  return (
    <div id="contacts" className="flex flex-col  mt-10 px-5 space-y-10 lg:mt-20  lg:justify-center text-white lg:space-y-0 lg:px-10">
      <div className="text-3xl lg:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-200 ">
        Contattaci
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-10 space-y-12 lg:space-y-0">
        {data.map((item) => (
          <div
            key={item.email}
            className=" shadow-xl shadow-red-500 rounded-xl flex flex-col items-center justify-center space-y-10 lg:w-1/3 w-max  relative aspect-square"
          >
            <div className="relative h-28 w-28 rounded-full overflow-hidden ">
              <Image src={item.img} alt={item.email} fill />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl">{item.name}</span>
              <span className="text-sm text-red-300">
                {item.role ? item.role : <br />}
              </span>
            </div>
            <div className="flex flex-col group">
              <a href={`mailto:${item.email}`} className="text-lg ">
                {item.email}
              </a>
              <span className="h-1 w-0  duration-300  bg-red-700 group-hover:w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FourthPart;
