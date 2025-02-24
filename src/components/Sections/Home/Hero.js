
"use client";
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import HeroImg from '../../../../public/images/Hero.png';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { useEffect, useState } from 'react';
import Link from "next/link";

const Hero = () => {
  const text = "Tomorrow's Ambitions";
  const [displayedText, setDisplayedText] = useState('');

  // useEffect(() => {
  //   let index = 0;
  //   const timer = setInterval(() => {
  //     if (index < text.length) {
  //       setDisplayedText(text.slice(0, index + 1));
  //       index++;
  //     } else {
  //       clearInterval(timer);
  //     }
  //   }, 100);

  //   return () => clearInterval(timer);
  // }, []);
  return (
    <section className="relative pt-32 pb-16 lg:pb-32  bg-[#FEF4EA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="relative">

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <Image src={HeroImg} alt="Hero Image" className="w-full h-full object-cover" />
            </motion.div>
          </div>
          <div className="text-center lg:text-right">
            <h1 className="font-brygada  text-4xl sm:text-4xl lg:text-4xl font-bold textcolor ">
              <span className='text-3xl lg:text-3xl'>Engineering Solutions for{' '}</span>
              <span className="sm:text-4xl lg:text-4xl textcolor text-primary ">Tomorrow's Ambitions</span>
            </h1>
            <p className="mt-6 text-lg textcolor lg:text-right ">
              At CrazyDevs, we transform bold ideas into scalable solutions,
              blending innovation with expertise to drive growth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Link href="/contact" >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#FF5C35] text-[#FF5C35] bg-transparent hover:bg-transparent  getStartedBtn"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;