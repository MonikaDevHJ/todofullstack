import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET() {
  const data = await prisma.shoppingList.findMany();
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const { item, quantity } = await req.json(); // ✅ Added 'quantity'

  const newItem = await prisma.shoppingList.create({
    data: {
      item: item,
      quantity: quantity || 1, // ✅ Now it works!
    },
  });

  return NextResponse.json(newItem);
}
