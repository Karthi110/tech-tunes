import User from "@/lib/models/user";
import connectToDB from "@/lib/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDB();

    const users = await User.find();

    return new NextResponse(JSON.stringify(users), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Failed to fetch all prompts", {
      status: 500,
    });
  }
};
