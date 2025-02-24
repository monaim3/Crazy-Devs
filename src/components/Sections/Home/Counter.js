

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import project from "../../../../public/images/project.png";
import experience from "../../../../public/images/experience.png";
import world from "../../../../public/images/world.png";
import Image from "next/image";
import CountUp from "react-countup";

const stats = [
  {
    id: 1,
    name: "Projects",
    value: "30+",
    icon: project,
  },
  {
    id: 2,
    name: "Countries",
    value: "20+",
    icon: experience,
  },
  {
    id: 3,
    name: "Year",
    value: "7+",
    icon: world,
  },
];

export default function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
   
    <motion.section
      id="counter-section"
      className="static lg:absolute py-2 w-[90%] mx-auto ml-16 -mt-8 bg-white border-t border-b border-gray-200 shadow-lg rounded-2xl"
      initial={{ y: 50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }} 
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => {
            const numericValue = parseInt(stat.value); // Convert to number

            return (
              <div
                key={stat.id}
                className={`text-center transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                style={{
                  transitionDelay: `${stat.id * 200}ms`,
                }}
              >
                <div className="flex gap-5 items-center justify-center">
                  <div className="bg-[#FFEBEA] p-2 rounded-full">
                    <Image src={stat.icon} alt={stat.name} width={30} height={30} />
                  </div>
                  <div className="mt-2">
                    {isVisible && (
                      <p className="text-3xl font-bold text-gray-900">
                        <CountUp key={stat.id} start={0} end={numericValue} duration={2} />+
                      </p>
                    )}
                    <p className="mt-1 text-lg text-gray-500">{stat.name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
