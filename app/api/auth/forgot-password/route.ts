export const runtime = "nodejs";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { sendPasswordResetEmail } from "@/lib/email/password";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    const user = await getUserByEmail(email);
    if (!user) {
      return NextResponse.json(
        { message: "No user found with this email" },
        { status: 404 }
      );
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const hashedOtp = await bcrypt.hash(otp, 10);
    const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000).toISOString();

    await saveOtpToDatabase(email, hashedOtp, otpExpiresAt);
    await sendPasswordResetEmail(email, otp);

    return NextResponse.json(
      { message: "OTP sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { message: error.message || "An error occurred" },
        { status: 500 }
      );
    } else {
      console.error("Error during forgot password:", error);
    }
  }
}

async function getUserByEmail(email: string) {
  const query = `
    query GetUserByEmail($email: String!) {
      users(where: { email: { _eq: $email } }) {
        id
        email
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
  return resJson.data.users[0];
}

async function saveOtpToDatabase(
  email: string,
  hashedOtp: string,
  otpExpiresAt: string
) {
  const mutation = `
  mutation SaveOtp($email: String!, $hashedOtp: String!, $otpExpiresAt: timestamptz!) {
    update_users(where: { email: { _eq: $email } }, _set: { 
      reset_otp: $hashedOtp, 
      otp_expires_at: $otpExpiresAt 
    }) {
      affected_rows
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
      query: mutation,
      variables: { email, hashedOtp, otpExpiresAt },
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to save OTP");
  }
}
