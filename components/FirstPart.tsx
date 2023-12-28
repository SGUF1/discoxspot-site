"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
const FirstPart = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:w-full px-5 text-center md:text-left">
      <div className="text-white p-4 md:w-1/2">
        <h1 className="first-letter:text-4xl md:first-letter:text-5xl lg:first-letter:text-7xl text-4xl md:text-3xl lg:text-5xl  font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-300">
          Dove Ogni Notte è un&apos;Esperienza Unica
        </h1>
        <p className="text-white mt-4 md:mt-8 text-xs md:text-lg">
          Scopri. Prenota. Vivi la Magia.
        </p>
        <p className="text-white mt-4 md:mt-8 text-xs md:text-lg  ">
          Entra nel mondo di discoXspot, la piattaforma che trasforma ogni tua
          uscita in una storia da raccontare. Sei un fanatico delle serate
          all&apos;insegna del divertimento o un gestore di locali alla ricerca di
          successo? Sei nel posto giusto! Scopri come possiamo fare scintille
          insieme.
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
