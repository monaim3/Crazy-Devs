"use client";

import { useState } from "react";
import Image from "next/image";
import php from "../../../../public/images/php 1.png";
import javascript from "../../../../public/images/javascript 1.png";
import react from "../../../../public/images/react 1.png";
import Djangu from "../../../../public/images/django 1.png";
import angular from "../../../../public/images/angular 1.png";
import mysql from "../../../../public/images/mysql 1.png";
import nodejs from "../../../../public/images/nodejs 1.png";
import laraval from "../../../../public/images/laraval 1.png";
import NextJs from "../../../../public/images/nextjs 1.png";
import { useTranslations } from "next-intl";
const capabilities = [
  {
    id: "web",
    title: "WEB",
    images: [
      php,
      javascript,
      react,
      Djangu,
      angular,
      mysql,
      nodejs,
      laraval,
      NextJs,
    ],
  },
  {
    id: "mobile",
    title: "MOBILE",
    images: [
      php,
      javascript,
      react,
      Djangu,
      angular,
    ],
  },
  {
    id: "cloud",
    title: "CMS",
    images: [
      php,
      javascript,
      react,
      Djangu,
      angular,
      mysql,
      NextJs,
    ],
  },
  {
    id: "ai",
    title: "SUPPORT TOOL",
    images: [
      php,
      javascript,
      react,
      Djangu,
      angular,
      mysql,
      nodejs,
      NextJs,
    ],
  },
  {
    id: "database",
    title: "APP SERVER",
    images: [
      php,
      javascript,
      react,
      Djangu,
      angular,
      mysql,
      nodejs,
      laraval,
      NextJs,
    ],
  },
  {
    id: "security",
    title: "CLOUD COMPUTING",
    images: [php, javascript, react, Djangu, angular, mysql, nodejs, laraval],
  },
  {
    id: "testing",
    title: "TESTING &QA",
    images: [php, javascript, react, Djangu, angular, mysql, nodejs, laraval],
  },
  {
    id: "content",
    title: "CONTENT DELIVERY NETWORD",
    images: [php, javascript, react, Djangu, angular, mysql, nodejs, laraval],
  },
];

export default function Capabilities({ noPadding }) {
  const [activeTab, setActiveTab] = useState(capabilities[0].id);
  const activeCapability = capabilities.find((cap) => cap.id === activeTab);
const capabilityT = useTranslations("capablity");
  return (
    <section className={`${noPadding ? "pt-10 pb-20" : "py-20 bg-gray-50"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold textcolor mb-4">
            {capabilityT("capablitytitle")}
         
            </h2>
          </div>
          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 bg-[#F5F5F5] py-4 rounded-md">
            {capabilities.map((capability) => (
              <button
                key={capability.id}
                onClick={() => setActiveTab(capability.id)}
                className={`flex items-center px-4 py-2 rounded-b-lg rounded-t-lg transition-all duration-300 ${
                  activeTab === capability.id
                    ? "bg-[#213343] text-white shadow-lg scale-105"
                    : " text-[#213343] hover:bg-gray-100"
                }`}
              >
                {capability.icon && (
                  <capability.icon
                    className={`w-5 h-5 mr-2 ${
                      activeTab === capability.id
                        ? "text-white"
                        : "text-primary"
                    }`}
                  />
                )}
                <span className="font-medium">
                 
                  {capabilityT(capability.title)}
                  </span>
              </button>
            ))}
          </div>
          {/* Content Area */}
          <div className="md:hidden image-tab ">
            <div className="grid grid-cols-2 gap-2  ">
              {activeCapability.images.map((image, index) => (
                <div key={index} className="relative group overflow-hidden">
                  <Image
                    src={image}
                    alt={`${activeCapability.title} showcase ${index + 1}`}
                    className="transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6 hidden md:flex justify-center items-center flex-col  ">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:px-56 lg:gap-4 mb-4">
              {activeCapability.images.slice(0, 5).map((image, index) => (
                <div key={index} className="relative group overflow-hidden">
                  <Image
                    src={image}
                    alt={`${activeCapability.title} showcase ${index + 1}`}
                    className="transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:px-[300px]">
              {activeCapability.images.slice(5).map((image, index) => (
                <div key={index} className="relative group overflow-hidden">
                  <Image
                    src={image}
                    alt={`${activeCapability.title} showcase ${index + 6}`}
                    className="object-cover transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
