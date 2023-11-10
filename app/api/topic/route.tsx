import connectMongoDB from "@/lib/mongodb";
import Board from "@/models/kabanBoard";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, description } = await request.json();
  await connectMongoDB();
  await Board.create({ name, description });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const boards = await Board.find();
  return NextResponse.json({ boards });
}

export async function DELETE(request: any) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Board.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Deleted Successfully" },
    { status: 200 }
  );
}
