
import { Metadata } from 'next';
import  Link  from 'next/link';
import { Init } from './Components/Home/Home';
import { Skill } from './Components/Skill/Skill';

export default function Home() {
  return (
    <>
      <Init />
      <Skill />
    </>   

  );
}


export const metadata: Metadata = {
  title: "Sobre Mim | Richard ",
  description: "Portifolio de Richard Henrique ",
};