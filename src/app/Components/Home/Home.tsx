"use client";
import React from "react";
import { motion } from "framer-motion";

export const Init = () => {
  const variacoesAnimadas = {
    inicio: {
      opacity: 0,
      x: -200,
    },

    whileInView: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
    fim: {
      opacity: 0,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <>
      <div className="text-center flex mr-48 mt-16 ">
        <motion.div
          initial={"inicio"}
          whileInView={"whileInView"}
          exit={"fim"}
          variants={variacoesAnimadas}
          className="flex items-center flex-col justify-center"
        >
          <h1 className="text-5xl poppins-bold ">Richard Henrique</h1>
          <p className="w-3/5 mt-5 text-xl">
            {" "}
            Desenvolvedor front-end apaixonado por transformar conceitos em
            interfaces intuitivas, comprometido com a excelência técnica,
            inovação e design centrado no usuário.{" "}
          </p>
          <button className="mt-5 bg-transparent hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Contatos
          </button>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -200 }}
          transition={{ duration: 1 }}
          className="rounded-full bg-blue-400 shadow-lg shadow-white "
          src="/figurinha/blz.png"
          alt=""
          width="350px"
        />
      </div>
    </>
  );
};
