export const runtime = "nodejs";
import bcrypt from "bcryptjs";
import { MyCredentialsInputs } from "@/auth/credentials";
import { gql } from "graphql-request";

type GraphQLVariables = {
  email: string;
};

const hasuraQuery = async (variables: GraphQLVariables) => {
  const query = gql`
    query users($email: String!) {
      users(where: { email: { _eq: $email } }) {
        id
        name
        email
        image
        created_at
        updated_at
        password_hash
      }
    }
  `;

  const res = await fetch(process.env.HASURA_GRAPHQL_ENDPOINT!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": process.env.HASURA_SECRET!,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }

  const resJson = await res.json();
  return resJson;
};

export const HasuraLogin = async (credentials: MyCredentialsInputs) => {
  const { email, password } = credentials;
  const { data } = await hasuraQuery({
    email: email as string,
  });

  if (!data.users || data.users.length === 0) {
    throw new Error("User not found");
  }

  const user = data.users[0];
  const isPasswordValid = await bcrypt.compare(
    password as string,
    user.password_hash
  );

  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    image: user.image,
  };
};
