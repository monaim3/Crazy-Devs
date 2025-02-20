import Image from "next/image";
import Header from "./Component/Header";
import Hero from "./Sections/Home/Hero";
import Counter from "./Sections/Home/Counter";
import Solutions from "./Sections/Home/Solution";
import Building from "./Sections/Home/Building";
import Clients from "./Sections/Home/Client";
import Showcase from "./Sections/Home/ShowCase";
import Capabilities from "./Sections/Home/Capabilities";

export default function Home() {
  return (
   <div>
   
     <Hero></Hero>
     <Counter></Counter>
     <Solutions></Solutions>
     <Building></Building>
     <Clients></Clients>
     <Showcase></Showcase>
     <Capabilities></Capabilities>
   </div>
  );
}
