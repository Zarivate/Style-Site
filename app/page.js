"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <h2>Howdy</h2>
      <Navbar toggle={toggle} />
    </>
  );
}
