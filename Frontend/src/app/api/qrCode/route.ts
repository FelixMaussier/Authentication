// app/api/qrcode/route.ts
import { generateQrData } from "@/lib/bankid-qr-data"; 
import { NextResponse } from "next/server";
import QRCode from 'qrcode';


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const qrStartToken = searchParams.get('qrStartToken');
  const qrStartSecret = searchParams.get('qrStartSecret');
  const orderTimeStr = searchParams.get('orderTime');

  if (!qrStartToken || !qrStartSecret || !orderTimeStr) {
    return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
  }

  try {
    const orderTime = parseFloat(orderTimeStr);
    
    // 1. Skapa data som ska ligga i QR-koden
    const qrData = generateQrData(qrStartToken, qrStartSecret, orderTime);
    
    // 2. Generera QR-kodens bild som en Buffer
    //    Denna del av koden saknades i din ursprungliga version.
    const qrCodeImage: Buffer = await QRCode.toBuffer(qrData, {
      type: "png",
      width: 256,
      errorCorrectionLevel: "H",
    });

    // 3. Konvertera Node.js-specifik Buffer till en webbkompatibel Uint8Array
    const qrCodeImageAsUint8 = new Uint8Array(qrCodeImage);

    // 4. Returnera bilden med korrekt MIME-typ
    return new NextResponse(qrCodeImageAsUint8, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
      },
    });

  } catch (error) {
      console.error('Error generating QR code:', error);
      return NextResponse.json({ error: 'Failed to generate QR code' }, { status: 500 });
  }
}