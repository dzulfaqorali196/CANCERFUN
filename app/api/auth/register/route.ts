import { NextResponse } from "next/server";
import { HasuraRegister } from "@/auth/hasura/register";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const newUser = await HasuraRegister(name, email, password);

    return NextResponse.json(
      { message: "User registered successfully", user: newUser },
      { status: 201 }
    );
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json(
        { message: err.message || "An error occurred" },
        { status: 500 }
      );
    } else {
      console.log("An unexpected error occurred.");
    }
  }
}
