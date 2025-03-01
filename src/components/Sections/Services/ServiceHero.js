import { useTranslations } from "next-intl";
import ServiceImg from "../../../../public/images/service.png";
import CommonHero from "../Home/CommonHero";

const ServiceHero = () => {
   const serviceT = useTranslations("service");
  return (
    <CommonHero
      imageSrc={ServiceImg}
      title={serviceT("serviceTitle")}
      description={serviceT("servicePara")}
      buttonText={serviceT("serviceBtn")}
      //   onButtonClick={() => alert("Button Clicked!")}
      imagePosition="left"
      textAlignment="right"
      padding="py-20 lg:py-32"
      // margin="mx-auto"
    />
  );
};

export default ServiceHero;
