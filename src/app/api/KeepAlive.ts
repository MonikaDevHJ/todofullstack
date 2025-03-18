import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await prisma.$queryRaw`SELECT 1`; // Ping the database
    res.status(200).json({ message: "Database keep-alive ping sent!" });
  } catch (error) {
    res.status(500).json({ error: "Error pinging the database" });
  }
}
