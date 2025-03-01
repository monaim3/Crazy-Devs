"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HeroImg from "../../../../public/images/Hero.png";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Hero = () => {
    const heroT = useTranslations("hero");
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
              <Image
                src={HeroImg}
                alt="Hero Image"
                className="w-full h-full object-cover lg:mt-4"
              />
            </motion.div>
          </div>
          <div className="text-center lg:text-right">
            <h1 className="font-brygada  text-4xl sm:text-4xl lg:text-4xl font-bold textcolor ">
              <span className="text-3xl lg:text-3xl">
              {heroT("heroText1")}{' '}
               
              </span>
              <span className="sm:text-4xl lg:text-4xl textcolor text-primary ">
              {heroT("heroText2")} 
              </span>
            </h1>
            <p className="mt-6 text-lg textcolor lg:text-right ">
            {heroT("heroParagraph")} 
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#FF5C35] text-[#FF5C35] bg-transparent hover:bg-transparent  getStartedBtn"
                >
                  {heroT("heroBtn")} 
                
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
