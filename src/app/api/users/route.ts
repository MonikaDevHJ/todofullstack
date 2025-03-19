  // route.ts
  import { NextResponse } from "next/server";
  import { prisma } from "@/app/lib/Prisma"; // Import Prisma

  // Get All Items
  export async function GET() {
    try {
      const items = await prisma.item.findMany(); // Change this
      return NextResponse.json(items);
    } catch (error) {
      return NextResponse.json({ error: "Failed to fetch items" }, { status: 500 });
    }
  }

  // Add New Item
  export async function POST(req: Request) {
    try {
      const { name } = await req.json();
      const newItem = await prisma.item.create({ data: { name } }); // Change this
      return NextResponse.json(newItem);
    } catch (error) {
      return NextResponse.json({ error: "Failed to add item" }, { status: 500 });
    }
  }

  // Delete Item
  export async function DELETE(req: Request) {
    try {
      const { id } = await req.json();
      await prisma.item.delete({ where: { id } }); // Change this
      return NextResponse.json({ message: "Item deleted" });
    } catch (error) {
      return NextResponse.json({ error: "Failed to delete item" }, { status: 500 });
    }
  }

  // Edit Item
  export async function PUT(req: Request) {
    try {
      const { id, name } = await req.json();
      const updatedItem = await prisma.item.update({ where: { id }, data: { name } }); // Change this
      return NextResponse.json(updatedItem);
    } catch (error) {
      return NextResponse.json({ error: "Failed to update item" }, { status: 500 });
    }
  }
