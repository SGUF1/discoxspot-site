import React from "react";

const ThirdPart = () => {
  return (
    <div
      id="works"
      className="mt-10 px-5 space-y-10 xl:mt-20 flex flex-col xl:space-y-0 xl:px-10"
    >
      <h1 className="text-3xl xl:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-200">
        Come funziona?
      </h1>
      <div className="text-white xl:px-10 lg:px-32 p-10 rounded-xl text-center xl:text-left space-y-10 xl:space-y-0 xl:h-[500px] flex flex-col w-full border-red-400 shadow-xl shadow-red-500 xl:justify-evenly justify-center items-center">
        <div className="flex items-center flex-col xl:space-x-10 xl:flex-row justify-between">
          <div className="w-1/3 text-2xl text-red-400 font-bold">
            Per utenti
          </div>
          <div className="text-sm xl:text-lg">
            Esplora e impara con facilità Scorri eventi esclusivi, vedi
            anteprime interattive dei luoghi e prenota con un semplice tocco.
            Personalizza la tua esperienza notturna scegliendo tra un&apos;ampia
            varietà di eventi, ognuno con la propria storia e atmosfera uniche.
          </div>
        </div>
        <div className="flex items-center flex-col xl:flex-row xl:space-x-10 justify-between">
          <div className="w-1/3 text-2xl text-red-400 font-bold">
            Per gestori
          </div>
          <div className="text-sm xl:text-lg">
            Gestisci e cresci con intelligenza Semplifica la gestione del tuo
            business con strumenti intelligenti. Ottieni prenotazioni, gestisci
            eventi e accedi ad analisi che ti aiuteranno a comprendere meglio il
            tuo pubblico. Lascia che discoXspot ti porti verso un futuro più
            luminoso e redditizio.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPart;
