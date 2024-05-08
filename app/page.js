"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InfoSections from "@/components/InfoSections";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "@/components/InfoData";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar $isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSections {...homeObjOne} />
      <InfoSections {...homeObjTwo} />
      <InfoSections {...homeObjThree} />
      <InfoSections {...homeObjFour} />
      <Footer />
    </>
  );
}
