import React from "react";
import { motion } from "framer-motion";

export const Projects = () => {
  
  return (
    <>
      <div className="bg-white text-black pb-32 rounded-xl">
        <div className="flex items-center flex-col mt-36">
            <h1 className="text-3xl font-bold mt-8">Projetos</h1>
            <p className="text-xl mt-5 ">Dê uma olhada em alguns dos projetos:</p>
        </div>
        <div className="flex flex-col gap-8 mt-8">
        <div className="flex justify-around gap-22">
            <div className="bg-gray-100 w-5/12 rounded-xl p-2 transform hover:scale-110 transition duration-500 ease-in-out cursor-pointer">
              <img className="rounded-xl" src="/Projects/EpiControl.jpg" alt=""  />
            </div>
            <div className="bg-gray-100 w-5/12 rounded-xl p-2 flex flex-col items-center justify-center shadow-sm shadow-gray-400/80">
              <h1 className="text-2xl font-semibold text-blue-600 ">EpiControl</h1>
              <p className="w-5/6 text-center mb-4">Projeto para atende a demanda industrial de um controle efetivo de Equipamentos de segurança. </p>
              <h3 className="font-semibold text-blue-600">Tecnologias:</h3>
              <p className="">ReactJS | javaScript | Node js | MySQL | Html | Css</p>
            </div>
        </div>
        <div className="flex justify-around gap-22 ">
            <div className="bg-gray-100 w-5/12 rounded-xl p-2 transform hover:scale-110 transition duration-500 ease-in-out cursor-pointer">
            <img className="rounded-xl" src="/Projects/financas.jpg" alt=""  />
            </div>
            <div className="bg-gray-100 w-5/12 rounded-xl p-2 shadow-sm shadow-gray-400/80 flex flex-col items-center justify-center">
            <h1 className="text-teal-600 text-2xl font-semibold">Controle Financeiro</h1>
              <p className="w-5/6 text-center mb-4">Projeto pessoal com objetivo de ter um sistema automatizado de finanças.</p>
              <h3 className="font-semibold text-teal-600 ">Tecnologias</h3>
              <p className="">React | JavaScript | nodeJs | Html | Css | Styled Components</p>
            </div>
        </div>
        </div>
      </div>
    </>
  );
};
