import Image from "next/image";
import React from "react";

const FirstPart = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:w-full px-5 text-center md:text-left">
      <div className="text-white p-4 md:w-1/2">
        <h1 className="first-letter:text-4xl md:first-letter:text-5xl lg:first-letter:text-7xl text-4xl md:text-3xl lg:text-5xl  font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-300">
          Where Every Night is a Unique Experience
        </h1>
        <p className="text-white mt-4 md:mt-8 text-xs md:text-lg">
          You discover, book. Experience the Magic.
        </p>
        <p className="text-white mt-4 md:mt-8 text-xs md:text-lg  ">
          Enter the world of discoXspot, the platform that transforms your every
          release into a story to tell. Are you a fanatic for fun-filled
          evenings or a club manager looking for success? You are in the right
          place! Find out how we can make sparks together.
        </p>
      </div>
      <div className="flex justify-center p-4  md:w-1/2">
        <Image
          src={"/sfera2.png"}
          alt="sfera"
          width={500} // Adjusted for better responsiveness
          height={500} // Adjusted for better responsiveness
          className="customShadow rounded-full"
        />
      </div>
    </div>
  );
};

export default FirstPart;
