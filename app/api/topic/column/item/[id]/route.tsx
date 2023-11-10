import connectMongoDB from "@/lib/mongodb";
import Item from "@/models/kanbanItem";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params: { id } }: { params: { id: String } }
) {
  const { newName: name, newDescription: description } = await request.json();

  await connectMongoDB();
  await Item.findByIdAndUpdate(id, { name, description });

  return NextResponse.json({ message: "Item updated" }, { status: 200 });
}
