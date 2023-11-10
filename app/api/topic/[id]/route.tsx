import connectMongoDB from "@/lib/mongodb";
import Board from "@/models/kabanBoard";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params: { id } }: { params: { id: String } }
) {
  const { newName: name, newDescription: description } = await request.json();

  await connectMongoDB();
  await Board.findByIdAndUpdate(id, { name, description });

  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}
