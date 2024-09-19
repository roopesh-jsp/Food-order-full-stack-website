import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Menu from "../components/Menu";
import AppDownload from "../components/AppDownload";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Menu />
      <AppDownload />
      <Footer />
    </>
  );
}
