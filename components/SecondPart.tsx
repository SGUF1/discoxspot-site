import React from "react";
import { RiVipCrown2Fill } from "react-icons/ri";
import { FaShieldAlt } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";

const SecondPart = () => {
  return (
    <div id="info" className="flex flex-col items-center mt-10 px-5 space-y-10 md:mt-20 md:flex-row md:justify-between md:space-y-0 md:px-10">
      <div className="flex flex-col space-y-5 items-center md:items-start text-white md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-200">
          Dance the Night Away, Leave the Planning to Us
        </h2>
        <p className="text-sm md:text-lg">
          Find the perfect spot for your night out, book tables, and buy tickets
          seamlessly with just a few taps. No more waiting in lines, no more
          sold-out signs.
        </p>
        <button className="py-2 px-4 text-white bg-gradient-to-b from-red-500 to-red-400 rounded-xl shadow-lg shadow-red-600 w-full md:w-auto">
          Start the Party
        </button>
      </div>
      <div className="flex flex-col text-white w-full md:w-1/2 space-y-6">
        {[
          {
            Icon: RiVipCrown2Fill,
            title: "VIP Access",
            description:
              "The finest clubs at your fingertips. Select your venue, choose your table, and become the VIP you were meant to be.",
          },
          {
            Icon: FaShieldAlt,
            title: "Secure Invites",
            description:
              "Invite your friends with secure, in-app options. Manage your guest list and make sure everyone's on board for the night of a lifetime.",
          },
          {
            Icon: MdDiscount,
            title: "Exclusive Deals",
            description:
              "Unlock exclusive offers, from discounted entry to complimentary drinks. Your unforgettable night doesn't have to come at a high price.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="flex items-center justify-center md:justify-start text-center md:text-left"
          >
            <div className="p-5 rounded-full iconShadow">
              <feature.Icon className="text-4xl text-red-400" />
            </div>
            <div className="flex flex-col ml-4">
              <h3 className="text-xl font-bold uppercase text-red-400">
                {feature.title}
              </h3>
              <p className="text-sm mt-2">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondPart;
