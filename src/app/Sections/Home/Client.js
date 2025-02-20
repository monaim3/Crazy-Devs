'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

import media from "../../../../public/images/media.png";
import nature from "../../../../public/images/nature.png";
import mountain from "../../../../public/images/mountain.png";
import reliance from "../../../../public/images/reliance.png";
import technology from "../../../../public/images/technology.png";
import northstart from "../../../../public/images/northstart.png";
import intdeco from "../../../../public/images/intdeco.png";
import Image from 'next/image';
const clients = [
  {
   
    logo:media,
  },
  {
   
    logo: nature,
  },
  {
    logo: mountain,
  },
  {

    logo: reliance,
  },
  {

    logo: technology,
  },
  {
    logo: northstart,
  },
  {
    logo: intdeco,
  },
];


export default function Clients() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [visibleItems, setVisibleItems] = useState(5);
    
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 480) {
          setVisibleItems(2);
        } else if (window.innerWidth < 768) {
          setVisibleItems(2);
        } else if (window.innerWidth < 1024) {
          setVisibleItems(3);
        } else if (window.innerWidth < 1280) {
          setVisibleItems(4);
        } else {
          setVisibleItems(5);
        }
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    useEffect(() => {
      if (!isAutoPlaying) return;
  
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === clients.length - visibleItems ? 0 : prevIndex + 1
        );
      }, 3000);
  
      return () => clearInterval(interval);
    }, [isAutoPlaying, visibleItems]);
  
    const handlePrevious = () => {
      setIsAutoPlaying(false);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? clients.length - visibleItems : prevIndex - 1
      );
    };
  
    const handleNext = () => {
      setIsAutoPlaying(false);
      setCurrentIndex((prevIndex) => 
        prevIndex === clients.length - visibleItems ? 0 : prevIndex + 1
      );
    };
  
    
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold textcolor mb-4">
              Our Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              30+ customers in over 25 countries grow their businesses with <span className='text-[#FF5C35]'>CrazyDevs</span>
            </p>
          </div>
  
          {/* <div className="relative max-w-7xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
              >
                {clients.map((client, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 px-2 sm:px-3 md:px-4 transition-all duration-300`}
                    style={{ width: `${100 / visibleItems}%` }}
                  >
                    <div className="bg-white rounded-lg  p-4 sm:p-6 h-24 sm:h-32 flex items-center justify-center ">
                      <Image
                        src={client.logo}
                        alt='clients'
                        className="max-h-12 sm:max-h-16 w-auto  transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-white rounded-full p-1.5 sm:p-2 shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
            </button>
  
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-white rounded-full p-1.5 sm:p-2 shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
            </button>
          </div> */}
  

  <div className="relative max-w-7xl mx-auto">
  <div className="overflow-hidden">
    <div
      className="flex transition-transform duration-500 ease-in-out "
      style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
    >
      {clients.map((client, index) => (
        <div
          key={index}
          className={`flex-shrink-0 px-2 sm:px-3 md:px-2 transition-all duration-300`}
          style={{ width: `${100 / visibleItems}%` }}
        >
          <div className="rounded-lg  sm:p-6 h-44 sm:h-32 flex items-center justify-center">
            <Image
              src={client.logo}
              alt='clients'
              className="!h-10 !max-h-30 !w-auto transition-all duration-300"
            />
          </div>
        </div>
      ))}
    </div>
  </div>

  <button
    onClick={handlePrevious}
    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-white rounded-full p-1.5 sm:p-2 shadow-lg hover:bg-gray-50 transition-colors"
    aria-label="Previous"
  >
    <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
  </button>

  <button
    onClick={handleNext}
    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-white rounded-full p-1.5 sm:p-2 shadow-lg hover:bg-gray-50 transition-colors"
    aria-label="Next"
  >
    <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
  </button>
</div>


          
        </div>
      </section>
    );
  }