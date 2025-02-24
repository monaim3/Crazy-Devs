"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";
import { Button } from "@/components/ui/button";
import buildingPng from "../../../../public/images/svgviewer-png-output.png";

const Building = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.section
      ref={ref}
      className="bg-[#FFEBEA] py-16 px-12"
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <div className="container mx-auto">
        <Image
          src={buildingPng}
          className="w-full"
          alt="buildingsectionimage"
        />

        <div>
          <h3 className="font-semibold textcolor text-center text-3xl mt-6">
            Start Building Smarter
          </h3>
          <p className="text-center px-2  mt-6">
            At CrazyDevs, we craft custom web and mobile apps, streamline
            software outsourcing, and amplify <br></br> brands with digital
            marketing—all designed to simplify complexity, adapt to your goals,
            and scale <br></br>effortlessly. Let’s turn your vision into smart,
            future-proof solutions.
          </p>
        </div>
        <div className="flex justify-center">
          <Button className="w-48 px-6 py-2 mt-8 bg-[#FF5C35] hover:bg-[#FF5C35]">
            Get A Free Consultation
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default Building;
