"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InfoSections from "@/components/InfoSections";
import { homeObjOne, homeObjTwo, homeObjThree } from "@/components/InfoData";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import styled from "styled-components";

const GlobalContainerTest = styled.div`
  background: linear-gradient(
      rgba(1, 1, 0, 255),
      rgba(254, 255, 254, 255) 150.71%
    )
    @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <GlobalContainerTest>
        <HeroSection />
        <InfoSections {...homeObjOne} />
        <InfoSections {...homeObjTwo} />
        <Services />
        <InfoSections {...homeObjThree} />
        <Footer />
      </GlobalContainerTest>
    </>
  );
}
