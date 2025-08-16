import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function FormBankID({
  qrCodeImage,
}: {
  qrCodeImage: string | null;
}) {
  return (
    <Card className="bg-gray-900/50 backdrop-blur border-gray-800 shadow-xl">
      <CardHeader>
        <CardTitle>Skanna QR-kod</CardTitle>
      </CardHeader>
      <CardContent>
        {qrCodeImage ? (
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
        )}
      </CardContent>
    </Card>
  );
}
