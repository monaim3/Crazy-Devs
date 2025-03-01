import { useTranslations } from "next-intl";
import ContactImg from "../../../../public/images/Contact.png";
import CommonHero from "../Home/CommonHero";

const ContactHero = () => {
    const contactBtn = useTranslations("Contact");
  return (
    <CommonHero
      imageSrc={ContactImg}
      title={contactBtn("Contact us")}
      description={contactBtn("contactPara")}
      buttonText={contactBtn("contactBtn")}
      //   onButtonClick={() => alert("Button Clicked!")}
      imagePosition="left"
      textAlignment="right"
      padding="py-20 lg:py-32"
      margin="mx-auto"
    />
  );
};

export default ContactHero;
