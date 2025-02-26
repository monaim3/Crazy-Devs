import { Brygada_1918, Rubik } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import { Footer } from "../../components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

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

export default async function RootLayout({ children, params }) {
  const {locale} = params;
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={`${brygada.variable} ${rubik.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
        <Header></Header>
        {children}
        <Footer></Footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
