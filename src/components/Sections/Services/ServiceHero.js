
// "use client";
// import { motion } from "framer-motion";
// import { Button } from '@/components/ui/button';
// import ServiceImg from '../../../../public/images/service.png';
// import Image from 'next/image';
// import Typewriter from 'typewriter-effect';
// import { useEffect, useState } from 'react';

// const ServiceHero = () => {
   
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
//                             <Image src={ServiceImg} alt="Hero Image" className="w-[70%] h-full mx-auto md:mx-0 object-cover" />
//                         </motion.div>
//                     </div>
//                     <div className="text-center lg:text-right">
//                         <h1 className="font-brygada  text-4xl sm:text-3xl lg:text-4xl font-bold textcolor lg:leading-[64px]">
//                             <span className='font-bold text-4xl sm:text-2xl lg:text-3xl'>Our Technological Solutions</span>

//                         </h1>
//                         <p className="mt-6 text-lg textcolor max-w-2xl mx-auto lg:mx-0">
//                         Turning ideas into impactful software solutions, we specialize in custom development, mobile apps, and enterprise integration to keep your business ahead in a digital-first world.
//                         </p>
//                         <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">

//                             <Button
//                                 size="lg"
//                                 variant="outline"
//                                 className="border-[#FF5C35] text-[#FF5C35] bg-transparent hover:bg-transparent  getStartedBtn"
//                             >
//                                 Get Started
//                             </Button>

//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ServiceHero;



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

