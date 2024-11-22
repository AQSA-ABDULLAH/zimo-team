"use client";
import { useState } from "react";
import Application from "./application-form/ApplicationForm/Application";
import Header from "../components/Header";
import Hero from "@/components/Hero";
import IntroVideo from "@/components/IntroVideo";
import DiscoverNew from "@/components/DiscoverNew";
import ZimoAI from "@/components/ZimoAI";
import ZimoGroup from "@/components/ZimoGroup";
import ZimoMeet from "@/components/ZimoMeet";
import StudioVideo from "@/components/StudioVideo";
import ZimoDoc from "@/components/ZimoDoc";
import ZimoCareer from "@/components/ZimoCareer";
import ZimoInternship from "@/components/ZimoInternship";
import DreamVideo from "@/components/DreamVideo";
import EqualOpportunity from "@/components/EqualOpportunity";
import ApplicationForm from "@/components/Application";
import Footer from "@/components/Footer";

const countries = [
  "United Kingdom", "United States", "Pakistan", "India", "Algeria", "Angola",
  "Argentina", "Australia", "Austria", "Bahamas", "Bahrain", "Bangladesh",
  "Barbados", "Belgium", "Belize", "Brazil", "Bulgaria", "Cameroon", "Canada",
  "Cape Verde"
];

const roles = [
  "1", "2", "3", "4", "5", "6",
  "7", "8", "9"
];

export default function Home() {
  const [showApplication, setShowApplication] = useState(false);

  // Function to show the Application section
  const handleApplyClick = () => {
    setShowApplication(true);
  };

  return (
    <div>
      {!showApplication ? (
        <>
          <Header />
          <Hero />
          <IntroVideo />
          <DiscoverNew />
          <ZimoAI />
          <ZimoGroup />
          <ZimoMeet />
          <StudioVideo />
          <ZimoDoc />
          <ZimoCareer />
          <ZimoInternship />
          <DreamVideo />
          <EqualOpportunity />
          <ApplicationForm countries={countries} roles={roles} onApplyClick={handleApplyClick} />
          <Footer />
        </>
      ) : (
        <Application />
      )}
    </div>
  );
}


