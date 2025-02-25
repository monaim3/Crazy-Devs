import ServiceImg from "../../../../public/images/service.png";
import CommonHero from "../Home/CommonHero";

const ServiceHero = () => {
  return (
    <CommonHero
      imageSrc={ServiceImg}
      title="Our Technological Solutions"
      description="Turning ideas into impactful software solutions, we specialize in custom development, mobile apps, and enterprise integration to keep your business ahead in a digital-first world."
      buttonText="Get Started"
      //   onButtonClick={() => alert("Button Clicked!")}
      imagePosition="left"
      textAlignment="right"
      padding="py-20 lg:py-32"
      margin="mx-auto"
    />
  );
};

export default ServiceHero;
