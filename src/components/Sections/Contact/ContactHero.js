import ContactImg from "../../../../public/images/Contact.png";
import CommonHero from "../Home/CommonHero";

const ContactHero = () => {
  return (
    <CommonHero
      imageSrc={ContactImg}
      title="Contact us"
      description="Got questions or need help? Our team is ready to offer personalized solutions, reliable support, and expert advice to help you reach your goals."
      buttonText="Consult With Us"
      //   onButtonClick={() => alert("Button Clicked!")}
      imagePosition="left"
      textAlignment="right"
      padding="py-20 lg:py-32"
      margin="mx-auto"
    />
  );
};

export default ContactHero;
