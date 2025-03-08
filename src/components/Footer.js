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
  const footerT = useTranslations("footer");
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
            {footerT("copyright")}
            
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
            {footerT("Web Development")}
             
            </Link>
            <Link href="#" className="block text-white hover:text-gray-300">
            {footerT("Mobile App Development")}
             
            </Link>
            <Link href="#" className="block text-white hover:text-gray-300">
            {footerT("Cloud & DevOps")}
            </Link>
            <Link href="#" className="block text-white hover:text-gray-300">
            {footerT("Digital Mareting")}
            </Link>
            <Link href="#" className="block text-white hover:text-gray-300">
            {footerT("Digital Product Design")}
            
            </Link>
            <Link href="#" className="block text-white hover:text-gray-300">
            {footerT("SRAugmentation")}
            </Link>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-[#FF4D4D] font-semibold">{footerT("BD OFFICE:")}</h3>
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
                  <MapPin className="h-7 w-7 text-[#FF4D4D] mt-1" />
                  <span>{footerT("326, New Elephant Road, Dhaka 1205, Bangladesh")}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-[#FF4D4D] font-semibold">{footerT("SAUDI OFFICE :")}</h3>
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
                  <span>{footerT("Riyadh, KSA :")}</span>
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


