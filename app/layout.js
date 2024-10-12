import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import HomeAc from "@/components/HomeAc";
import Tarif from "@/components/Tarif";



export const metadata = {
  title: "Iptv App",
  description: "Iptv for users",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden `}>


      <Navbar />
      <main>
      {children}
      </main>
  
      </body>
    </html>
  );
}
