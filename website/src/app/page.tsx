'use client'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SplashScreen from "@/components/SplashScreen";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [showFirstComponent, setShowFirstComponent] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstComponent(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex flex-col min-h-screen justify-between bg-orange-300/40">
      <Header />
      <main className="flex min-[100vh] flex-col items-center justify-between p-24">
      {showFirstComponent ? <SplashScreen /> : <Hero />}
      </main>
      
      <Footer />

    </div>
  );
}
