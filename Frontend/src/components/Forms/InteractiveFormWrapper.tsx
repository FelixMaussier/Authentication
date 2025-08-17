"use client";

import { useState } from "react";
import BankIDForm from "./BankIDForm";
import SignUpForm from "./SignUpForm";
import LandingForm from "./LandingForm";
import OAuthForm from "./OAuthForm";

export default function InteractiveFormWrapper() {
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
  return <>{renderCurrentForm()}</>;
}
