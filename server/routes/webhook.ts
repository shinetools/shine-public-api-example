import { Request, Response } from 'express';
import { existsSync, readFileSync, writeFileSync } from 'fs';

export const readFromDb = () => {
  if (!existsSync('db.json')) {
    writeFileSync('db.json', '[]');
    return [];
  }

  const db = readFileSync('db.json').toString();
  return JSON.parse(db);
};

const webhook = async (_: Request, res: Response) => {
  const webhooks = readFromDb();
  res.status(200).send(webhooks);
};

export default webhook;
