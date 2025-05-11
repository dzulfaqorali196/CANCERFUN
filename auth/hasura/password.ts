import { gql } from "graphql-request";

export const HasuraForgotPassword = async (email: string) => {
  try {
    const query = gql`
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

    if (!res.ok) {
      throw new Error("Failed to fetch user");
    }

    const resJson = await res.json();

    if (resJson.errors) {
      console.error("Hasura error:", resJson.errors);
      throw new Error(resJson.errors[0].message || "An error occurred");
    }

    const users = resJson.data.users;

    if (!users || users.length === 0) {
      return null;
    }

    return users[0];
  } catch (error) {
    console.error("Error during Hasura forgot password:", error);
    throw error;
  }
};
