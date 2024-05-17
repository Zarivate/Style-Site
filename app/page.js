"use client";
import React, { useState } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import InfoSections from "@/components/infoSections";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "@/components/infoData";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Sidebar $isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSections {...homeObjOne} />
      <InfoSections {...homeObjTwo} />
      <InfoSections {...homeObjThree} />
      <InfoSections {...homeObjFour} />
      <Footer />
    </div>
  );
}
