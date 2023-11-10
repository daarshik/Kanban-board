import connectMongoDB from "@/lib/mongodb";
import Column from "@/models/kanbanColumn";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, boardId } = await request.json();

    await connectMongoDB();

    const createdColumn = await Column.create({ name, boardId });

    return NextResponse.json(
      { message: "Column Created", createdColumn },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating column:", error);
    return NextResponse.json(
      { message: "Error creating column" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const getAllColumn = await Column.find();
    return NextResponse.json({ getAllColumn });
  } catch (error) {
    console.error("Error fetching column:", error);
    return NextResponse.json(
      { message: "Error fetching column" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: any) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Column.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Deleted Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Cannot delete the column" },
      { status: 500 }
    );
  }
}
