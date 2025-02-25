import { Brygada_1918, Rubik } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { Footer } from "../components/Footer";

const brygada = Brygada_1918({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-brygada",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-rubik",
});

export const metadata = {
  title: "CrazyDevs",
  description: "Engineering Solutions for Tomorrow's Ambitions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${brygada.variable} ${rubik.variable} antialiased`}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
