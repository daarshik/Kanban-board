import connectMongoDB from "@/lib/mongodb";
import Column from "@/models/kanbanColumn";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params: { id } }: { params: { id: String } }
) {
  const { newName: name } = await request.json();

  await connectMongoDB();
  await Column.findByIdAndUpdate(id, { name });

  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}
