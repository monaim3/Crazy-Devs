"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const CommonHero = ({
  imageSrc,
  title,
  description,
  buttonText,
  onButtonClick,
  imageAlt = "Hero Image",
  imagePosition = "left", // "left" or "right"
  padding = " pt-32 pb-16 lg:pb-32 ",
  margin = "mx-auto",
  containerClasses = "container mx-auto px-4 sm:px-6 lg:px-8",
  textAlignment = "center", // "left" or "right"
}) => {
  return (
    <section className={`relative bg-[#FEF4EA] ${padding}`}>
      <div className={containerClasses}>
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            imagePosition === "right" ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Image Section */}
          <div className="relative">
            <motion.div
              initial={{ x: imagePosition === "left" ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                className={`w-[70%] h-full ${margin} object-cover`}
              />
            </motion.div>
          </div>

          {/* Text Content */}
          <div className={`text-${textAlignment} lg:text-${textAlignment}`}>
            <h1 className="font-brygada text-4xl sm:text-3xl lg:text-4xl font-bold textcolor lg:leading-[64px]">
              <span className="font-bold text-4xl sm:text-2xl lg:text-3xl">
                {title}
              </span>
            </h1>
            <p className="mt-6 text-lg textcolor lg:text-right ">
              {description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              {buttonText && (
               <Link href="/contact">
                 <Button
                  size="lg"
                  variant="outline"
                  className="border-[#FF5C35] text-[#FF5C35] bg-transparent hover:bg-transparent getStartedBtn"
                  onClick={onButtonClick}
                >
                  {buttonText}
                </Button>
               </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonHero;
