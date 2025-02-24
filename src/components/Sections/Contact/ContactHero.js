
// "use client";
// import { motion } from "framer-motion";
// import { Button } from '@/components/ui/button';
// import ContactImg from '../../../../public/images/Contact.png';
// import Image from 'next/image';
// import Typewriter from 'typewriter-effect';
// import { useEffect, useState } from 'react';

// const ContactHero = () => {
   
//     return (
//         <section className="relative py-28 lg:py-36 sm:pt-32 sm:pb-16 bg-[#FEF4EA]">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//                     <div className="relative">

//                         <motion.div
//                             initial={{ x: -100, opacity: 0 }}
//                             animate={{ x: 0, opacity: 1 }}
//                             transition={{ duration: 2, ease: "easeOut" }}
//                         >
//                             <Image src={ContactImg} alt="Hero Image" className="w-[70%] h-full mx-auto md:mx-0 object-cover" />
//                         </motion.div>
//                     </div>
//                     <div className="text-center lg:text-right">
//                         <h1 className="font-brygada  text-4xl sm:text-3xl lg:text-4xl font-bold textcolor lg:leading-[64px]">
//                             <span className='font-bold text-4xl sm:text-2xl lg:text-3xl'>Contact us</span>

//                         </h1>
//                         <p className="mt-6 text-lg textcolor max-w-2xl mx-auto lg:mx-0">
//                         Got questions or need help? Our team is ready to <br></br>offer personalized solutions, reliable support, and <br></br>expert advice to help you reach your goals.
//                         </p>
//                         <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">

//                             <Button
//                                 size="lg"
//                                 variant="outline"
//                                 className="border-[#FF5C35] text-[#FF5C35] bg-transparent hover:bg-transparent  getStartedBtn"
//                             >
//                                Consult With Us
//                             </Button>

//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ContactHero;



import ContactImg from '../../../../public/images/Contact.png';
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