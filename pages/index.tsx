import Home from "@components/Home/Home";
import Navbar from "@components/Navbar/Navbar";
import React from "react";
import Image from "next/image";
export default function Index() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}
