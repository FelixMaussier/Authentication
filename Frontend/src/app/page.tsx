"use client";
import "tailwindcss";
import { useState, useEffect } from "react";
import Iridescence from "@/components/reactbits/Iridescence";
import BankIDForm from "@/components/Forms/BankIDForm";
import SignUpForm from "@/components/Forms/SignUpForm";
import LandingForm from "@/components/Forms/LandingForm";
import OAuthForm from "@/components/Forms/OAuthForm";

export default function SpaceLanding() {
  const [activeForm, setActiveForm] = useState("landing");

  const handleFormSwitch = (form: string) => {
    setActiveForm(form);
  };

  const renderCurrentForm = () => {
    switch (activeForm) {
      case "landing":
        return <LandingForm onSwitch={handleFormSwitch} />;
      case "signUp":
        return <SignUpForm onSwitch={handleFormSwitch} />;
      case "bankID":
        console.log("bankID");
        return <BankIDForm onSwitch={handleFormSwitch} />;
      case "google":
        return <OAuthForm />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Iridescence
            color={[0.4, 0.1, 0.5]}
            mouseReact={false}
            amplitude={0.1}
            speed={1.0}
          />
        </div>
        {renderCurrentForm()}
      </div>
    </>
  );
}
