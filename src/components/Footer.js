"use client";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/footerImg.png";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
export function Footer() {
  const router = useRouter();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const getNewLocale = () => (locale === 'en' ? 'ar' : 'en');

  // Function to handle language change
  const handleLanguageChange = () => {
    const newLocale = getNewLocale();
    const currentPath = window.location.pathname;
    const newPath = `/${newLocale}${currentPath.substring(3)}`;
    startTransition(() => {
      router.replace(newPath);
    });
  };
  const navigation = [
    { name: "home", href: "/" },
    { name: "about", href: "/about-us" },
    { name: "services", href: "/services" },
    { name: "career", href: "/career" },
  ];
  const headerT = useTranslations("header");

  return (
    <footer className="bg-[#1E2024] text-white w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src={logo} width={150} height={100} alt="logo" />
            </div>
            <p className="text-sm text-white font-300 font-rubik">
              © 2019 - 2025 All rights reserved.
            </p>
            <div className="flex space-x-4 lg:pt-44">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="bg-[#FFEBEA] rounded-full p-2 hover:bg-gray-200 transition-colors"
              >
                <Facebook className="h-5 w-5 text-[#FF5C35]" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="bg-[#FFEBEA] rounded-full p-2 hover:bg-gray-200 transition-colors"
              >
                <Instagram className="h-5 w-5 text-[#FF5C35]" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="bg-[#FFEBEA] rounded-full p-2 hover:bg-gray-200 transition-colors"
              >
                <Twitter className="h-5 w-5 text-[#FF5C35]" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            {/* <Link
              href="/"
              className="block text-[#FF4D4D] hover:text-[#ff6b6b]"
            >
               {headerT(home)}
            </Link>
            <Link
              href="/about-us"
              className="block text-[#FF4D4D] hover:text-[#ff6b6b]"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block text-[#FF4D4D] hover:text-[#ff6b6b]"
            >
              Services
            </Link>
            <Link
              href="/career"
              className="block text-[#FF4D4D] hover:text-[#ff6b6b]"
            >
              Career
            </Link>
            <Link
              href="/contact"
              className="block text-[#FF4D4D] hover:text-[#ff6b6b]"
            >
              Contact Us
            </Link> */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='block text-[#FF4D4D] hover:text-[#ff6b6b]'
              >
                {headerT(item.name)}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div className="space-y-4">
            <Link href="#" className="block text-white hover:text-gray-300">
              WebApp Development
            </Link>
            <Link href="#" className="block text-white hover:text-gray-300">
              MobileApp Development
            </Link>
            <Link href="#" className="block text-white hover:text-gray-300">
              Cloud & DevOps
            </Link>
            <Link href="#" className="block text-white hover:text-gray-300">
              Digital Mareting
            </Link>
            <Link href="#" className="block text-white hover:text-gray-300">
              Digital Product Design
            </Link>
            <Link href="#" className="block text-white hover:text-gray-300">
              SRAugmentation
            </Link>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-[#FF4D4D] font-semibold">BD OFFICE:</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-[#FF4D4D]" />
                  <span>+8801716098676</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-[#FF4D4D]" />
                  <span>sales.bd@teamcrazydevs.com</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-8 w-8 text-[#FF4D4D] mt-1" />
                  <span>326, New Elephant Road, Dhaka 1205, Bangladesh.</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-[#FF4D4D] font-semibold">SAUDI OFFICE :</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-[#FF4D4D]" />
                  <span>+8801716098676</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-[#FF4D4D]" />
                  <span>sales.saudi@teamcrazydevs.com</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-5 w-5 text-[#FF4D4D] mt-1" />
                  <span>Riyadh, KSA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-right">
          <button disabled={isPending} onClick={handleLanguageChange} className="text-white hover:text-gray-300">
            En Ar
          </button>
        </div>
      </div>
    </footer>
  );
}
