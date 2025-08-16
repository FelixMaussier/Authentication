import { NextResponse } from "next/server";
import https from "https";
import fs from "fs";
import path from "path";
import axios from "axios";

export async function POST(request: Request) {
  console.log("routes.tsx : POST request received");
  try {
    const certPath = path.join(
      process.cwd(),
      "certs",
      "FPTestcert5_20240610.p12"
    );

    const cert = fs.readFileSync(certPath);

    const passphrase = "qwerty123"; //passphrase: process.env.BANKID_CERT_PASSPHRASE,

    const agent = new https.Agent({
      pfx: cert,
      passphrase: passphrase,
      rejectUnauthorized: false,
    });

    const bankIdApiUrl = "https://appapi2.test.bankid.com/rp/v6.0/auth";

    const userVisibleText = "Logga in med BankID";
    const userVisibleData = Buffer.from(userVisibleText, "utf8").toString(
      "base64"
    );

    const body = {
      endUserIp: "192.168.1.2",
      userVisibleData: userVisibleData,
      requirement: {
        certificatePolicies: ["1.2.3.4.25"],
        personalNumber: "200001012384",
      },
    };

    const bankIdResponse = await axios.post(bankIdApiUrl, body, {
      httpsAgent: agent,
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = bankIdResponse.data;
    console.log("BankID response:", data);

    return NextResponse.json({
      orderRef: data.orderRef,
      qrStartToken: data.qrStartToken,
      qrStartSecret: data.qrStartSecret,
    });
    
  } catch (error) {
    console.error("Error in BankID API route:", error);

    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.details || "Failed to initiate BankID login";
      const statusCode = error.response?.status || 500;

      return NextResponse.json({ error: errorMessage }, { status: statusCode });
    } else {
      return NextResponse.json(
        { error: "An unknown error occurred" },
        { status: 500 }
      );
    }
  }
}
