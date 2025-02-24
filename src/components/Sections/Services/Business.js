import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Monitor,
  Smartphone,
  Cloud,
  LineChart,
  Box,
  Users,
} from "lucide-react";
import web from "../../../../public/images/webapp.png";
import mobile from "../../../../public/images/mobile.png";
import claud from "../../../../public/images/claud.png";
import digital from "../../../../public/images/digital.png";
import product from "../../../../public/images/product.png";
import software from "../../../../public/images/software.png";
import Image from "next/image";

const services = [
  {
    title: "Web App Development",

    image: web,
  },
  {
    title: "MobileApp Development",
    image: mobile,
  },
  {
    title: "Cloud & DevOps Solution",
    image: claud,
  },
  {
    title: "Digital Marketing",
    image: digital,
  },
  {
    title: "Digital Product Design",
    image: product,
  },
  {
    title: "Software Resource Augmentation",
    image: software,
  },
];

function ServiceCard({ service }) {
  let titleLines = [];
  if (service.title.includes(",")) {
    titleLines = service.title.split(",");
  } else {
    const words = service.title.split(" ");
    const mid = Math.ceil(words.length / 2);
    titleLines = [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
  }
  return (
    <div className="flex flex-col items-center text-center mb-6 ">
      <div className="h-12 w-12 mb-4 flex items-center justify-center">
        <Image
          src={service.image}
          alt="Service Image"
          className="w-full h-full"
        />
      </div>
      <h3 className="text-md font-medium text-slate-900 ">
        {" "}
        {titleLines.map((line, index) => (
          <span key={index}>
            {line.trim()}
            {index < titleLines.length - 1 && <br />}
          </span>
        ))}
      </h3>
    </div>
  );
}

export default function Business() {
  return (
    <main className="bg-[#FEF4EA] container mx-auto py-12 lg:px-8">
      <section className="bg-white  mx-auto px-4 flex flex-col md:flex-row gap-4">
        <div className="p-8 rounded-lg  lg:w-2/4">
          <h1 className="text-3xl font-bold text-slate-900 mb-4 text-center md:text-left">
            Small Business Bundle
          </h1>
          <p className="text-slate-600 mb-4 text-center md:text-left">
            The Starter edition of every Drazydevs product, bundled together at
            a discounted price for your startup or small business. Find and
            reach customers, grow sales and get paid faster, and organize
            customer data.
          </p>
          <p className="text-slate-600 mb-6 text-center md:text-left">— all on one unified platform.</p>

          <Button
            size="lg"
            variant="outline"
            className="w-[100%] lg:w-[70%] border-[#FF5C35] text-[#FF5C35] bg-transparent hover:bg-transparent   mx-auto lg:mx-0"
          >
            Get Started
          </Button>
        </div>

        {/* Second Div - More Space */}
        <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-10">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>
      </section>
    </main>
  );
}
