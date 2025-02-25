import HeroImg from "../../../../public/images/about.png";
import CommonHero from "../Home/CommonHero";
const AboutHero = () => {
  return (
    <CommonHero
      imageSrc={HeroImg}
      title="Building Smarter Futures"
      description="At CrazyDevs, we transform ideas into software that leads
            markets and overcomes challenges, crafting scalable systems
            with precision engineering and strategic insight."
      buttonText="Get Started"
      //   onButtonClick={() => alert("Button Clicked!")}
      imagePosition="left"
      textAlignment="right"
      padding="py-20 lg:py-32"
      margin="mx-auto"
    />
  );
};

export default AboutHero;
