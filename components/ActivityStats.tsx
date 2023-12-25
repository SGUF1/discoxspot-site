import { activeUsers, discos, reservedTables } from '@/actions/data';
import React from 'react'

const ActivityStats = () => {
  return (
    <div
      id="info"
      className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 text-white md:justify-between mt-20"
    >
      <div className="flex space-x-2 items-center">
        <span className="font-bold text-2xl">{activeUsers}+</span>
        <span className=" text-transparent bg-clip-text bg-gradient-to-r to-red-300 text-lg from-red-500 font-bold  ">
          USER ACTIVE
        </span>
      </div>
      <div className="flex space-x-2 items-center">
        <span className="font-bold text-2xl">{discos}+</span>
        <span className=" text-transparent bg-clip-text bg-gradient-to-r to-red-300 text-lg from-red-500 font-bold  ">
          DISCO
        </span>
      </div>
      <div className="flex space-x-2 items-center">
        <span className="font-bold text-2xl">{reservedTables}+</span>
        <span className=" text-transparent bg-clip-text bg-gradient-to-r to-red-300 text-lg from-red-500 font-bold  ">
          RESERVED TABLES
        </span>
      </div>
    </div>
  );
}

export default ActivityStats