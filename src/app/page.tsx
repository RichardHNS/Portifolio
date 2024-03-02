
import { Metadata } from 'next';
import  Link  from 'next/link';
import { Init } from './Components/Home/Home';

export default function Home() {
  return (
    <>
      <Init />
    </>   

  );
}


export const metadata: Metadata = {
  title: "Sobre Mim | Richard ",
  description: "Portifolio de Richard Henrique ",
};