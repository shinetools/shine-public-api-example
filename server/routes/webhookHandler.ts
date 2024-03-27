import { createHmac } from 'crypto';
import { NextFunction, Request, Response } from 'express';
import { writeFileSync } from 'fs';
import { webhookSecret } from '../config';
import { readFromDb } from './webhook';

export const rawBodySaver = function (req: Request, res: Response, buf: Buffer, encoding: BufferEncoding) {
  if (buf && buf.length) {
    (req as any).rawBody = buf.toString(encoding || 'utf8');
    console.log('Raw body:', (req as any).rawBody);
  }
};

const verifyWebHookSignature = (req: Request): boolean => {
  // 1. Extract the timestamp and signatures from the corresponding headers
  const timestamp = req.headers.date; // Date header
  const signature = req.headers['shine-signature']; // Shine-Signature header

  // 2. Prepare the `signedPayload` string created by concatenating the timestamp, the `.` character and the request JSON body
  const { rawBody } = req as any; // should be the raw unparsed body as JSON parsing can change fields ordering and alter signature
  const signedPayload = `${timestamp}.${rawBody}`;

  // 3. Determine the expected signature by computing an HMAC with the SHA512 hash function using the endpoint's secret as the key and the `signedPayload` as the message
  const hmac = createHmac('sha512', webhookSecret); // webhookSecret is provided by shine
  hmac.update(signedPayload);
  const expectedSignature = hmac.digest('hex');

  // 4. Compare the signature in the header with the expected signature.
  console.log('Expected signature:', expectedSignature);
  console.log('Received signature:', signature);
  return expectedSignature === signature;
};

const writeToDb = (webhooks: any[]) => {
  writeFileSync('db.json', JSON.stringify(webhooks, null, 2));
};

const webhookHandler = async (req: Request, res: Response, next: NextFunction) => {
  console.log('Webhook received:', req.headers, req.body);
  if (!verifyWebHookSignature(req)) {
    return res.status(400).send('Invalid signature');
  }

  const webhooks = readFromDb();
  webhooks.push(req.body);
  writeToDb(webhooks);
  res.status(200).send('Webhook received');
};

export default webhookHandler;
