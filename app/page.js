"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection, { VideoBg } from "@/components/HeroSection";
import Videotest from "../public/video.mp4";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <HeroSection />
      <VideoBg autoPlay loop muted src={Videotest} type="video/mp4" />
      <HeroSection />
    </>
  );
}
