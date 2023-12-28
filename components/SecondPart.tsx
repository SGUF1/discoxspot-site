"use client"
import React from "react";
import { RiVipCrown2Fill } from "react-icons/ri";
import { FaShieldAlt } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import {useRouter} from 'next/navigation';
const SecondPart = () => {
  const router = useRouter()
  
  return (
    <div
      id="info"
      className="flex flex-col items-center mt-10 px-5 space-y-10 md:mt-20 md:flex-row md:justify-between md:space-y-0 md:px-10"
    >
      <div className="flex flex-col space-y-5 items-center md:items-start text-white md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-200">
          Balla tutta la notte, lascia a noi la pianificazione
        </h2>
        <p className="text-sm md:text-lg">
          Trova il posto perfetto per la tua serata fuori, prenota i tavoli e
          acquista i biglietti senza problemi con pochi tocchi. Niente più
          attese in fila, niente più cartelli di tutto esaurito.
        </p>
        <button
          className="py-2 px-4 text-white bg-gradient-to-b from-red-500 to-red-400 rounded-xl shadow-lg shadow-red-600 w-full md:w-auto"
          onClick={() => router.push("https://app.discoxspot.com")}
        >
          Inizia il party
        </button>
      </div>
      <div className="flex flex-col text-white w-full md:w-1/2 space-y-6">
        {[
          {
            Icon: RiVipCrown2Fill,
            title: "Accesso VIP",
            description:
              "I migliori club a portata di mano. Seleziona il tuo locale, scegli il tuo tavolo e diventa il VIP che dovevi essere.",
          },
          {
            Icon: FaShieldAlt,
            title: "Inviti sicuri",
            description:
              "Invita i tuoi amici con opzioni sicure e in-app. Gestisci la tua lista degli invitati e assicurati che tutti siano a bordo per la notte della tua vita.",
          },
          {
            Icon: MdDiscount,
            title: "Offerte esclusive",
            description:
              "Sblocca offerte esclusive, dall'ingresso scontato alle bevande in omaggio. La tua notte indimenticabile non deve avere un prezzo elevato.",
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
