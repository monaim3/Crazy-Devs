import { useTranslations } from "next-intl";
import HeroImg from "../../../../public/images/about.png";
import CommonHero from "../Home/CommonHero";
const AboutHero = () => {
   const missionT = useTranslations("about");
  return (
    <CommonHero
      imageSrc={HeroImg}
      title={missionT("aboutTitle")}
      description={missionT("aboutPara")}
      buttonText={missionT("aboutBtn")}
      //   onButtonClick={() => alert("Button Clicked!")}
      imagePosition="left"
      textAlignment="right"
      padding="py-20 lg:py-32"
      margin="mx-auto"
    />
  );
};

export default AboutHero;
