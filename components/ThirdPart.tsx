import React from "react";

const ThirdPart = () => {
  return (
    <div
      id="works"
      className="mt-10 px-5 space-y-10 xl:mt-20 flex flex-col xl:space-y-0 xl:px-10"
    >
      <h1 className="text-3xl xl:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-200">
        How it works?
      </h1>
      <div className="text-white xl:px-10 lg:px-32 p-10 rounded-xl text-center xl:text-left space-y-10 xl:space-y-0 xl:h-[500px] flex flex-col w-full border-red-400 shadow-xl shadow-red-500 xl:justify-evenly justify-center items-center">
        <div className="flex items-center flex-col xl:space-x-10 xl:flex-row justify-between">
          <div className="w-1/3 text-2xl text-red-400 font-bold">For users</div>
          <div className="text-sm xl:text-lg">
            Explore and Learn with Ease Scroll through exclusive events, see
            interactive previews of venues, and book with a simple tap.
            Customize your nighttime experience by choosing from a wide variety
            of events, each with its own unique story and atmosphere.
          </div>
        </div>
        <div className="flex items-center flex-col xl:flex-row xl:space-x-10 justify-between">
          <div className="w-1/3 text-2xl text-red-400 font-bold">
            For managers
          </div>
          <div className="text-sm xl:text-lg">
            Manage and Grow with Intelligence Simplify the management of your
            business with intelligent tools. Get bookings, manage events, and
            access analytics that will help you better understand your audience.
            Let discoXspot take you to a brighter and more profitable future.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPart;
