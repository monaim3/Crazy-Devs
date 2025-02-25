"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import female from "../../../../public/images/female.png";

const showcaseData = [
  {
    id: 1,
    title: "How a niche luxury brand generates 10,000 segmented leads a month.",
    image: female,
    services: ["Web Development", "Mobile App Development"],
  },
  {
    id: 2,
    title:
      "How startups quickly scale their digital presence with our solutions.",
    image: female,
    services: ["Web Development", "Mobile App Development"],
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const nextIndex = (prev + 1) % showcaseData.length;
      console.log("Current Slide:", prev, "Next Slide:", nextIndex);
      return nextIndex;
    });
  };

  useEffect(() => {
    console.log("Updated currentSlide:", currentSlide);
  }, [currentSlide]);

  if (!showcaseData || showcaseData.length === 0) return null;

  return (
    <main
      className="lg:h-[130vh] py-12 px-2 md:p-8 lg:py-16 lg:px-12"
      style={{
        backgroundImage: `url('/images/svgviewer-png-output (1).png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto lg:px-12">
        <div className="mb-8">
          <h2 className="text-lg text-[#213343]">Show Case</h2>
          <h1 className="text-3xl md:text-3xl lg:text-3xl font-bold textcolor max-w-4xl mt-2">
            How other companies successfully generate & qualify leads with Crazy
            Devs
          </h1>
        </div>

        <div className="relative lg:mt-24 lg:px-12 w-[60%] mx-auto">
          <div className="relative w-full h-[600px] lg:h-[350px]">
            {showcaseData.map((showcase, index) => (
              <div
                key={showcase.id}
                className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                style={{
                  opacity: index === currentSlide ? 1 : 0,
                  zIndex: index === currentSlide ? 10 : 0,
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 h-full">
                  <div className="relative flex items-center">
                    <div className="absolute left-[-50px] lg:left-[-100px] flex flex-col space-y-0.5 -rotate-12 z-30 :mt-16">
                      {showcase.services.map((service, idx) => (
                        <Button
                          key={idx}
                          variant="secondary"
                          className="z-10 w-[150px] lg:w-44 h-12 textcolor shadow-lg transform transition-all duration-300 hover:scale-105 "
                          style={{
                            background:
                              "linear-gradient(to right, #f8f2ea 30%, #979b9b 90%)",
                          }}
                        >
                          {service}
                        </Button>
                      ))}
                    </div>

                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 2, ease: "easeOut" }}
                    >
                      <div className="rounded-2xl overflow-hidden relative ml-12">
                        <Image
                          src={showcase.image}
                          alt="Showcase"
                          className="w-[200px] h-[200px] object-cover"
                        />
                      </div>
                    </motion.div>
                  </div>

                  <div className="flex flex-col">
                    <div className="relative transform perspective-1000">
                      <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                      >
                        <Card className="bg-[#213343] text-white px-6 py-2 lg:-rotate-12 lg:px-4 lg:py-12 rounded-2xl relative group cursor-pointer transform-style-3d transition-transform duration-700 ease-in-out">
                          <div>
                            <h3 className="text-xl font-semibold">
                              {showcase.title}
                            </h3>
                            <div className="flex justify-between mt-12">
                              <p className="text-gray-300">
                                Read The Full Story
                              </p>
                              <div className="relative">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    nextSlide();
                                  }}
                                  className="bg-transparent rounded-full border p-2 transition-transform group-hover:translate-x-2"
                                  aria-label="Next Slide"
                                >
                                  <ArrowRight className="w-6 h-6 text-[#f1f1f1]" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center mt-6 lg:mt-12 space-x-2">
            {showcaseData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-16 h-1 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-gray-900" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
