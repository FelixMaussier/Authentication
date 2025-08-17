import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BankIDForm({
  onSwitch,
}: {
  onSwitch: (form: string) => void;
}) {
  //  const startBankIDLogin = async () => {
  //   setLoading(true);

  //   try {
  //     const response = await fetch("/api/bankID", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       setQrCodeData(data);
  //       console.log("Received QR code data:", data);
  //     } else {
  //       console.error("Error from API:", data.error);
  //     }
  //   } catch (error) {
  //     console.error("Failed to connect to API:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  //  useEffect(() => {
  //   if (!qrCodeData) return;

  //   const fetchQrCode = async () => {
  //     try {
  //       const qrResponse = await fetch(
  //         `/api/qrCode?qrStartToken=${qrCodeData.qrStartToken}&qrStartSecret=${qrCodeData.qrStartSecret}&orderTime=${qrCodeData.orderTime}`
  //       );

  //       if (qrResponse.ok) {
  //         const qrCodeBlob = await qrResponse.blob();
  //         const qrCodeUrl = URL.createObjectURL(qrCodeBlob);
  //         setQrCodeImage(qrCodeUrl);
  //       } else {
  //         console.error("Failed to fetch QR code.");
  //       }
  //     } catch (e) {
  //       console.error("Failed to connect to QR code API:", e);
  //     }
  //   };

  //   fetchQrCode();
  //   const intervalId = setInterval(fetchQrCode, 1000);

  //   return () => {
  //     clearInterval(intervalId);
  //     if (qrCodeImage) {
  //       URL.revokeObjectURL(qrCodeImage);
  //     }
  //   };
  // }, [qrCodeData]);
  return (
    <Card className="bg-gray-900/50 backdrop-blur border-gray-800 shadow-xl">
      <CardHeader>
        <CardTitle>Skanna QR-kod</CardTitle>
      </CardHeader>
      <CardContent>
        {/* {qrCodeImage ? (
          <div className="flex justify-center p-4">
            <Image
              src={qrCodeImage}
              alt="BankID QR-kod"
              width={300}
              height={300}
              unoptimized={true}
            />
          </div>
        ) : (
          <p>Genererar QR-kod...</p>
        )} */}
      </CardContent>
    </Card>
  );
}
