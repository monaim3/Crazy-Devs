"use client";

import { useEffect, useState } from "react";

import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bgColor, setBgColor] = useState("bg-[#FEF4EA] py-4");
  const headerT = useTranslations("header");
  const pathname = usePathname();
  const navigation = [
    { name: "home", href: "/" },
    { name: "about", href: "/about-us" },
    { name: "services", href: "/services" },
    { name: "career", href: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("bg-[#fff] shadow-md py-4 ");
      } else {
        setBgColor("bg-[#FEF4EA]");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`fixed w-full ${bgColor}  backdrop-blur-md z-50 py-4`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <span>
                {" "}
                <Image src={logo} width={150} height={100} alt="logo" />
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-12 flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors  ${
                    pathname === item.href
                      ? "text-[#FF5C35] font-semibold"
                      : "text-[#1C1E22] "
                  }`}
                >
                  {headerT(item.name)}
                </Link>
              ))}
              <Link href="/contact">
                <Button className=" bg-[#FF5C35]">{headerT("contact")}</Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400  focus:outline-none "
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className=" pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 uppercase hover:text-primary hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
             
             <Link href="/contact">
                <Button className=" bg-[#FF5C35] w-full mt-4">{headerT("contact")}</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
