'use client';

import Image from 'next/image';
import { Check } from 'lucide-react';
import solutions from "../../../../public/images/solutions.png";
const features = [
  {
    icon: Check,
    title: 'Custom-built for your goals',

  },
  {
    icon: Check,
    title: 'Efficiency, speed & adaptability',
  },
  {
    icon: Check,
    title: 'Third-party API integration',

  }
];

export default function Solutions() {
  return (
    <div  className="py-12 lg:py-32 bg-[#F6F9FC]" 
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <Image src={solutions} alt="Engineering team"
              className="rounded-lg  w-full object-cover"></Image>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl  textcolor mb-6">
              <span className='font-600'>  Solutions</span> <br />
              <span className="text-primary font-bold">Engineered For Growth</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Transform ideas into competitive advantage with software that's built to evolve as fast as your business does.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="mt-2 flex-shrink-0 bg-[#FF5C35] rounded-full p-0.5">
                    <feature.icon className="h-3 w-3 text-white " />
                  </div>
                  <div>
                    <h3 className="text-lg font-400 text-gray-900">{feature.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}