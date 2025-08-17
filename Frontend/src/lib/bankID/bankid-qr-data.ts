import crypto from "crypto";

export function generateQrData(qrStartToken: string, qrStartSecret: string, orderTime: number) {
  const qrTime = Math.floor((Date.now() / 1000) - orderTime);
  const qrTimeString = qrTime.toString();

  const qrAuthCode = crypto
    .createHmac('sha256', Buffer.from(qrStartSecret, 'utf8'))
    .update(qrTimeString)
    .digest('hex');

  return `bankid.${qrStartToken}.${qrTimeString}.${qrAuthCode}`;
}