export const runtime = "nodejs";
import bcrypt from "bcryptjs";
import { gql } from "graphql-request";

type GraphQLVariables = {
  name: string;
  email: string;
  password: string;
  password_hash: string;
};

const hasuraQuery = async (variables: { email: string }) => {
  const query = gql`
    query users($email: String!) {
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
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }

  const resJson = await res.json();
  return resJson.data.users;
};

const hasuraMutation = async (variables: GraphQLVariables) => {
  const mutation = gql`
    mutation InsertUser(
      $name: String!
      $email: String!
      $password: bpchar!
      $password_hash: String
    ) {
      insert_users_one(
        object: {
          name: $name
          email: $email
          password: $password
          password_hash: $password_hash
        }
      ) {
        id
        name
        email
        created_at
      }
    }
  `;

  const res = await fetch(process.env.HASURA_GRAPHQL_ENDPOINT!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": process.env.HASURA_SECRET!,
    },
    body: JSON.stringify({ query: mutation, variables }),
  });

  if (!res.ok) {
    throw new Error("Failed to register user");
  }

  const resJson = await res.json();

  if (resJson.errors) {
    throw new Error(resJson.errors[0].message || "An error occurred");
  }

  const insertedUser = resJson.data?.insert_users_one;
  if (!insertedUser) {
    throw new Error("Failed to insert user");
  }

  return insertedUser;
};

export const HasuraRegister = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const existingUsers = await hasuraQuery({ email });

    if (existingUsers.length > 0) {
      throw new Error("A user with this email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await hasuraMutation({
      name,
      email,
      password,
      password_hash: hashedPassword,
    });

    return newUser;
  } catch (error) {
    console.error("Error during Hasura registration:", error);
    throw error;
  }
};
