// route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/Prisma"; // Import Prisma

// Get All Items
export async function GET() {
  try {
    const items = await prisma.item.findMany(); // Fetch all items
    return NextResponse.json(items);
  } catch (error) {
    console.error("GET Error:", error); // Log the actual error
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to fetch items" },
      { status: 500 }
    );
  }
}

// Add New Item
export async function POST(req: Request) {
  try {
    const { name } = await req.json();
    const newItem = await prisma.item.create({ data: { name } }); // Create a new item
    return NextResponse.json(newItem);
  } catch (error) {
    console.error("POST Error:", error); // Log the actual error
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to add item" },
      { status: 500 }
    );
  }
}

// Delete Item
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    await prisma.item.delete({ where: { id } }); // Delete an item by ID
    return NextResponse.json({ message: "Item deleted" });
  } catch (error) {
    console.error("DELETE Error:", error); // Log the actual error
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to delete item" },
      { status: 500 }
    );
  }
}

// Edit Item
export async function PUT(req: Request) {
  try {
    const { id, name } = await req.json();
    const updatedItem = await prisma.item.update({ where: { id }, data: { name } }); // Update item by ID
    return NextResponse.json(updatedItem);
  } catch (error) {
    console.error("PUT Error:", error); // Log the actual error
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to update item" },
      { status: 500 }
    );
  }
}
