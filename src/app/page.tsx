
import { Metadata } from 'next';
import { Init } from './Components/Home/Home';
import { Skill } from './Components/Skill/Skill';
import { Projects } from './Components/projects/projects';

export default function Home() {
  return (
    <>
      <Init />
      <Skill />
      <Projects />
    </>   

  );
}


export const metadata: Metadata = {
  title: "Sobre Mim | Richard ",
  description: "Portifolio de Richard Henrique ",
};