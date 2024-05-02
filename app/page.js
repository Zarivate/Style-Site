"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InfoSections from "@/components/InfoSections";
import { homeObjOne, homeObjTwo, homeObjThree } from "@/components/InfoData";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSections {...homeObjOne} />
      <InfoSections {...homeObjTwo} />
      <InfoSections {...homeObjThree} />
    </>
  );
}
