"use client";
import React from "react";
import { motion } from "framer-motion";

export const Skill = () => {
  return (
    <>
      <div className="flex justify-center mt-36 ">
        <div className="bg-gradient-to-b from-blue-400 to-blue-600 w-11/12 h-max rounded-2xl	">
          <h1 className="text-center text-3xl font-bold mt-10 mb-40	">Skills</h1>
        </div>
      </div>
      <motion.div
        initial={{ y: -90 }}
        exit={{ y: -90 }}
        className="flex justify-around  "
      >
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white text-black w-72 rounded-lg flex flex-col items-center py-6 px-5 "
        >
          <img src="/codigo (1).png" alt="" width="70px" />
          <h3 className="text-2xl font-bold my-3">Front-end</h3>
          <p className="my-3">
            Construir interfaces front-end envolventes e intuitivas, aplicando
            habilidades técnicas e expertise no design para aprimorar a
            experiência do usuário de forma eficaz.
          </p>
          <h2 className="text-blue-600 my-3">Tecnologias:</h2>
          <p className="text-center">HTML | CSS | JavaScript | TypeScript </p>
          <h2 className="text-blue-600 my-3">Ferramentas:</h2>
          <p className="">ReactJS</p>
          <p className="">React Native</p>
          <p className="">NextJS</p>
          <p className="">Botstrap</p>
          <p className="">Tailwind</p>
          <p className="">Style Components</p>
          <p className="">Sass</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white text-black w-72   rounded-lg flex flex-col items-center py-6 px-5"
        >
          <img src="/o-circuito (1).png" alt="" width="70px" />
          <h3 className="text-2xl font-bold my-3">Back-end</h3>
          <p className="my-3">
            Desenvolver lógica de negócios, sistemas back-end e APIs, com ampla
            expertise em controle de versão para suporte eficiente ao produto.
          </p>
          <h2 className="text-blue-600 my-3">Linguagens:</h2>
          <p className="text-center">Java | Python | C#</p>
          <h2 className="text-blue-600 my-3">Ferramentas:</h2>
          <p>MySQL</p>
          <p>NodeJS</p>
          <p>PostgreSQL</p>
          <p>GIT</p>
          <p>GitHub</p>
          <p></p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white text-black w-72   rounded-lg flex flex-col items-center py-6 px-5"
        >
          <img src="/design-thinking.png" alt="" width="70px" />
          <h3 className="text-2xl font-bold my-3">Design</h3>
          <p className="my-3">
            Design inovador que transforma ideias em experiências visuais
            cativantes, focado na estética e usabilidade para aprimorar a
            experiência do usuário.
          </p>
          <h2 className="text-blue-600 my-3">Conhecimentos:</h2>
          <p className="text-center">UX | UI | Web | Mobile | Apps</p>
          <h2 className="text-blue-600 my-3">Ferramentas:</h2>
          <p>Figma</p>
          <p>Design Thinkings</p>
          <p>Miro</p>
          <p>Canva</p>
          <p></p>
          <p></p>
        </motion.div>
      </motion.div>
      <div className="flex justify-center items-center">
        <div className=" border-t-2 border-blue-400 w-5/12"></div>
        <a
          className=" font-bold bg-blue-500 hover:bg-transparent p-4 rounded-xl border border-blue-400 "
          href="/pdf/Curriculo Richard Henrique 2024.1 (1).pdf"
          download="Curriculo Richard Henrique 2024.1 (1).pdf"
        >
          Meu curriculo
        </a>
        <div className=" border-t-2 border-blue-400 w-5/12"></div>
      </div>
    </>
  );
};
