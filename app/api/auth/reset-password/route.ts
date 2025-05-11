export const runtime = "nodejs";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { sendPasswordChangedEmail } from "@/lib/email/password";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, newPassword } = body;

    if (!email || !newPassword) {
      return NextResponse.json(
        { message: "Email and new password are required" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await updatePassword(email, hashedPassword);
    await sendPasswordChangedEmail(email);

    return NextResponse.json(
      { message: "Password updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during password reset:", error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}

async function updatePassword(email: string, hashedPassword: string) {
  const mutation = `
    mutation UpdatePassword($email: String!, $passwordHash: String!) {
      update_users(where: { email: { _eq: $email } }, _set: { 
        password_hash: $passwordHash, 
        reset_otp: null, 
        otp_expires_at: null 
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
      variables: { email, passwordHash: hashedPassword },
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to update password");
  }
}
