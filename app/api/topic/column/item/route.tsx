import connectMongoDB from "@/lib/mongodb";
import Item from "@/models/kanbanItem";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, description } = await request.json();

    await connectMongoDB();

    const createdItem = await Item.create({ name, description });

    return NextResponse.json(
      { message: "Column Created", createdItem },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating Item:", error);
    return NextResponse.json(
      { message: "Error creating Item" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const getAllItem = await Item.find();
    return NextResponse.json({ getAllItem });
  } catch (error) {
    console.error("Error fetching Item:", error);
    return NextResponse.json(
      { message: "Error fetching Item" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: any) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Item.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Deleted Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Cannot delete the Item" },
      { status: 500 }
    );
  }
}
