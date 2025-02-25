import Hero from "../components/Sections/Home/Hero";
import Counter from "../components/Sections/Home/Counter";
import Solutions from "../components/Sections/Home/Solution";
import Building from "../components/Sections/Home/Building";
import Clients from "../components/Sections/Home/Client";
import Showcase from "../components/Sections/Home/ShowCase";
import Capabilities from "../components/Sections/Home/Capabilities";

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
