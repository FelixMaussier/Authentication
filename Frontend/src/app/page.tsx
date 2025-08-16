"use client";
import "tailwindcss";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github, Mail, Chrome, Rocket } from "lucide-react";
import SplitText from "@/components/reactbits/SplitText";
import ShinyText from "@/components/reactbits/ShinyText";
import Iridescence from "@/components/reactbits/Iridescence";
import FormBankID from "@/components/MyComponents/Forms/form_bankID";
import SignUpForm from "@/components/MyComponents/Forms/signUp";
import LandingForm from "@/components/MyComponents/Forms/LandingForm";
import OAuthForm from "@/components/MyComponents/Forms/OAuthForm";

export default function SpaceLanding() {
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [qrCodeData, setQrCodeData] = useState(null as any);
  const [qrCodeImage, setQrCodeImage] = useState(null as any);
  const [showSignUpForm, setSignUpForm] = useState(false);
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
        return <h1>Bank ID</h1>;
      case "google":
        return <OAuthForm />;
      default:
        return null;
    }
  };
  const startBankIDLogin = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/bankID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        setQrCodeData(data);
        console.log("Received QR code data:", data);
      } else {
        console.error("Error from API:", data.error);
      }
    } catch (error) {
      console.error("Failed to connect to API:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!qrCodeData) return;

    const fetchQrCode = async () => {
      try {
        const qrResponse = await fetch(
          `/api/qrCode?qrStartToken=${qrCodeData.qrStartToken}&qrStartSecret=${qrCodeData.qrStartSecret}&orderTime=${qrCodeData.orderTime}`
        );

        if (qrResponse.ok) {
          const qrCodeBlob = await qrResponse.blob();
          const qrCodeUrl = URL.createObjectURL(qrCodeBlob);
          setQrCodeImage(qrCodeUrl);
        } else {
          console.error("Failed to fetch QR code.");
        }
      } catch (e) {
        console.error("Failed to connect to QR code API:", e);
      }
    };

    fetchQrCode();
    const intervalId = setInterval(fetchQrCode, 1000);

    return () => {
      clearInterval(intervalId);
      if (qrCodeImage) {
        URL.revokeObjectURL(qrCodeImage);
      }
    };
  }, [qrCodeData]);

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
