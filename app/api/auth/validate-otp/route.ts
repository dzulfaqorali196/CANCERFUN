export const runtime = "nodejs";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, otp } = body;

    if (!email || !otp) {
      return NextResponse.json(
        { message: "Email and OTP are required" },
        { status: 400 }
      );
    }

    const isValid = await validateOtp(email, otp);
    if (!isValid) {
      return NextResponse.json(
        { message: "Invalid or expired OTP" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "OTP validated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during OTP validation:", error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}

async function validateOtp(email: string, otp: string) {
  const query = `
    query GetUserOtp($email: String!) {
      users(where: { email: { _eq: $email } }) {
        reset_otp
        otp_expires_at
      }
    }
  `;

  const res = await fetch(process.env.HASURA_GRAPHQL_ENDPOINT!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": process.env.HASURA_SECRET!,
    },
    body: JSON.stringify({
      query,
      variables: { email },
    }),
  });

  const resJson = await res.json();
  const user = resJson.data.users[0];

  if (!user || !user.reset_otp) {
    return false;
  }

  const currentTime = new Date();
  const otpExpiresAt = new Date(user.otp_expires_at);
  if (currentTime > otpExpiresAt) {
    return false;
  }

  return bcrypt.compare(otp, user.reset_otp);
}
