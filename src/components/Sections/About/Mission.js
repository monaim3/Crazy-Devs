"use client";

import { useState } from "react";
import { Star, Check } from "lucide-react";
import Image from "next/image";
import target from "../../../../public/images/charlie.png";
import { useTranslations } from "next-intl";
export default function Mission() {
  const [activeTab, setActiveTab] = useState("mission");
  const missionT = useTranslations("about");
  const missionPoints = [
    "We build to outpace, not just outlast",
    "Deliver intuitive solutions that simplify complexity & drive measurable results",
    "Collaborate with purpose",
  ];

  const visionPoints = [
    "To be the global leader in innovative software solutions",
    "Create lasting impact through technological excellence",
    "Foster a culture of continuous learning and growth",
  ];

  return (
    <div className=" bg-[#F6F9FC] py-16 px-24 relative">
      <div className="max-w-7xl mx-auto z-50">
        {/* Tabs */}
        <div className="flex justify-center gap-0 mb-12 -mt-32">
          <button
            onClick={() => setActiveTab("mission")}
            className={`px-16 text-2xl font-semibold  transition-all ${activeTab === "mission"
                ? "bg-[#F6F9FC] text-[#FF5733] py-4 inactivebtn"
                : "bg-[#FF5733] text-[#fff]  py-2 missionbtn mt-4"
              }`}
          >
            {missionT("Mission")}
          </button>
          <button
            onClick={() => setActiveTab("vision")}
            className={`px-16 text-2xl font-semibold transition-all vissonbtn ${activeTab === "vision"
                ? "bg-[#F6F9FC] text-[#FF5733] py-4 visionbtn"
                : "bg-[#FF5733] text-[#fff]  py-2 inactiveBtn mt-4"
              }`}
          >
            {missionT("Vision")}
          </button>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-2 items-center">
          {/* Icon */}
          <div className="flex justify-center">
            {activeTab === "mission" ? (
              <div className="relative w-52 h-52 md:w-72 md:h-72 lg:mt-12">
                <div className="absolute inset-0 bg-[#FF5733] rounded-full">
                  <Image src={target} alt="target"></Image>
                </div>
              </div>
            ) : (
              <div className="relative w-52 h-52 md:w-72 md:h-72 lg:mt-12">
                <div className="absolute inset-0 bg-[#FF5733] rounded-full ">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Star className="text-white w-40 h-40" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Text Content */}
          <div className="text-center lg:w-3/4 mt-6">
            {/* <h2 className="text-4xl font-bold mb-4 text-right">
              {activeTab === "mission" ? "Our Mission" : "Our Vision"}
            </h2> */}
            <h2 className="text-4xl font-bold mb-4 text-right">
              {activeTab === "mission" ? missionT("Our Mission") : missionT("Our vision")}
            </h2>

            <p className="text-lg mb-8 text-right">
              {activeTab === "mission" ? (
                <>
                  {missionT("missionPara")}
                </>
              ) : (
                <>
                  {missionT("visionPara")}
                </>
              )}
            </p>
            <ul className="space-y-4 ">
              {(activeTab === "mission" ? missionPoints : visionPoints).map(
                (point, index) => (
                  <li
                    key={index}
                    className=" flex justify-end items-center gap-3 text-right "
                  >
                    <span className="text-right ">  {missionT(point)}</span>
                    <div className="flex-shrink-0 h-4 w-4 rounded-full bg-[#FF5733] flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
