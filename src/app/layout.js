import dns from "node:dns";
dns.setServers(['8.8.8.8','8.8.4.4']);

import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Header from "@/components/shared/Header";


const poppins=Poppins({
  variable:"--font-poppins",
  subsets:["latin"],
  weight:["400","500","600","700"]
})
export const metadata = {
  title: "Dragon News",
  description: "Best news portal",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={` h-full antialiased`}
    >
      <body className={`${poppins.className}min-h-full flex flex-col`}>
       {/* <Header></Header>
       <Navbar></Navbar> */}
        <main>
         
        {children}

        </main>
        </body>
    </html>
  );
}
