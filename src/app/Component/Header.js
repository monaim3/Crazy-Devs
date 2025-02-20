'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

import logo from '../../../public/images/logo.png';
import { useRouter } from 'next/navigation';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [bgColor, setBgColor] = useState("bg-[#FEF4EA] py-4");

   
    const router = useRouter();
    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Career', href: '#career' },
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
        <header className={`fixed w-full ${bgColor}  backdrop-blur-md z-50 `}>
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8 lg:pt-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-2">
                            <span> <Image
                                src={logo}
                                width={150}
                                height={100}
                                alt="logo"
                            /></span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-12 flex items-center justify-center space-x-8">
                            {navigation.map((item) => (
                                <Link 
                                    key={item.name}
                                    href={item.href}
                                    className={`transition-colors mt-4 ${
                                      router.pathname === item.href
                                        ? "text-[#FF5C35] font-semibold"
                                        : "text-[#1C1E22] "
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Button className=" mt-4 bg-[#FF5C35]">Contact Us</Button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
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
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Button className="w-full mt-4 bg-[#FF5C35]">Contact Us</Button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}