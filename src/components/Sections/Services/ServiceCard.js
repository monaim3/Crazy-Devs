"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import web from "../../../../public/images/webapp.png";
import mobile from "../../../../public/images/mobile.png";
import claud from "../../../../public/images/claud.png";
import digital from "../../../../public/images/digital.png";
import product from "../../../../public/images/product.png";
import software from "../../../../public/images/software.png";
import Image from "next/image";
const services = [
  {
    title: "WebApp Development",
    image: web,
    features: [
      "Custom Web Development",
      "Responsive Design",
      "Performance & Security Optimization",
    ],
  },
  {
    title: "MobileApp Development",
    image: mobile,
    features: [
      "Custom Mobile App Solutions",
      "Cross-Platform Development",
      "Scalable & Secure Apps",
    ],
  },
  {
    title: "Cloud & DevOps Solution",
    image: claud,
    features: [
      "Cloud Infrastructure Management",
      "CI/CD Implementation",
      "Automation & Monitoring",
    ],
  },
  {
    title: "Digital Marketing",
    image: digital,
    features: [
      "SEO & Content Marketing",
      "Social Media Management",
      "Performance Marketing",
    ],
  },
  {
    title: "Digital Product Design",
    image: product,
    features: [
      "User-Centered Design",
      "Prototyping & Wireframing",
      "End-to-End Product Design",
    ],
  },
  {
    title: "Software Resource Augmentation",
    image: software,
    features: [
      "On-Demand Talent Acquisition",
      "Flexible Engagement Models",
      "Seamless Integration",
    ],
  },
];

export default function ServiceCard() {
  return (
    <main className=" bg-[#FEF4EA] pt-2 pb-0 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 border-gray-100 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex gap-4 items-center border-b border-gray-500 pb-8">
                  <div className="">
                    <Image
                      src={service.image}
                      alt="Service Image"
                      width={50}
                      height={50}
                      className=" "
                    ></Image>
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold text-gray-900 flex ">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="">
                <h3 className="text-lg font-300 text-gray-700 mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="flex-shrink-0 h-4 w-4 rounded-full bg-[#FF5733] flex items-center justify-center">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 py-5 bg-[#FF5733] ">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
