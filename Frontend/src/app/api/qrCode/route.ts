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
    
    const qrData = generateQrData(qrStartToken, qrStartSecret, orderTime);

    const qrCodeImage: Buffer = await QRCode.toBuffer(qrData, {
      type: "png",
      width: 256,
      errorCorrectionLevel: "H",
    });

    const qrCodeImageAsUint8 = new Uint8Array(qrCodeImage);

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