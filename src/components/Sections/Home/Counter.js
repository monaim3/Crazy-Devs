"use client";

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
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="relative container mx-auto ">
        <div
          id="counter-section"
          className=" py-2 w-full  lg:absolute lg:-mt-12 m-0 bg-white border-t border-b border-gray-200 lg:shadow-lg rounded-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => {
              const numericValue = parseInt(stat.value);
              return (
                <div key={stat.id} className={`text-center`}>
                  <div className="flex gap-5 items-center justify-center">
                    <div className="bg-[#FFEBEA] p-2 rounded-full">
                      <Image
                        src={stat.icon}
                        alt={stat.name}
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="mt-2">
                      <p className="text-3xl font-bold text-gray-900">
                        <CountUp
                          key={stat.id}
                          start={0}
                          end={numericValue}
                          duration={2}
                        />
                        +
                      </p>
                      <p className="mt-1 text-lg text-gray-500">{stat.name}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
