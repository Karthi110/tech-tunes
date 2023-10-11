import User from "@/lib/models/user";
import connectToDB from "@/lib/utils/connect";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    await User.findByIdAndDelete(params.id);
    return new NextResponse("User Deleted successfull", { status: 200 });
  } catch (error) {
    return new NextResponse("Failed to Delete ", { status: 500 });
  }
};
