'use client'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomePage from "@/components/HomePage";
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
    <div className="flex flex-col h-screen justify-between gap-5">
      <Header />
      <main className="flex flex-col items-center justify-between mt-50">
      {showFirstComponent ? <SplashScreen /> : <HomePage />}
      </main>
      
      <Footer />

    </div>
  );
}
