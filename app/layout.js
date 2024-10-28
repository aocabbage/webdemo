import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Lato } from "next/font/google";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const lato = Lato({ 
  subsets: ["latin"] ,
  weight: "400",
});

export const metadata = {
  title: "Andrew Cabbage",
  description: "A portfolio for Andrew Cabbage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lato.className} antialiased bg-primary-50 text-primary-900`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

