"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Desktop } from "@/components/macos/Desktop";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Check if specific code is executed on the client side
    const hasShown = typeof window !== "undefined" ? sessionStorage.getItem("introShown") : null;
    if (hasShown) {
      setShowIntro(false);
    }
  }, []);

  const handleVideoEnd = () => {
    setShowIntro(false);
    sessionStorage.setItem("introShown", "true");
  };

  if (showIntro) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black text-white">
        <video
          src="/Mac_Style_Intro_Video_Creation.mp4"
          autoPlay
          muted
          playsInline
          className="h-full w-full object-contain md:object-cover"
          onEnded={handleVideoEnd}
        >
          Sarthak Jadhav
        </video>
      </div>
    );
  }

  return <Desktop />;
}
