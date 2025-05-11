import { gql } from "graphql-request";

type Step5Data = {
  additionalInfo?: string;
  cvLink?: string;
};

type UserData = {
  name: string;
  email: string;
};

// Fetch user data to populate required fields
export const hasuraFetchUserData = async (
  userId: string
): Promise<UserData> => {
  const query = gql`
    query GetUserData($userId: uuid!) {
      users_by_pk(id: $userId) {
        name
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
    body: JSON.stringify({ query, variables: { userId } }),
  });
  const resJson = await res.json();
  if (resJson.errors) {
    throw new Error(resJson.errors[0].message || "Failed to fetch user data");
  }
  const user = resJson.data?.users_by_pk;
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

// Fetch step5 data from Hasura
export const hasuraFetchStep5Data = async (
  userId: string,
  jobId: string
): Promise<Step5Data> => {
  const query = gql`
    query GetStep5Data($userId: uuid!, $jobId: uuid!) {
      applicants(
        where: { user_id: { _eq: $userId }, job_id: { _eq: $jobId } }
      ) {
        id
        additional_info
        cv_link
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
      variables: { userId, jobId },
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch step 5 data");
  }

  const resJson = await res.json();
  if (resJson.errors) {
    throw new Error(resJson.errors[0].message || "An error occurred");
  }

  const applicant = resJson.data?.applicants[0];
  return {
    additionalInfo: applicant?.additional_info ?? "",
    cvLink: applicant?.cv_link ?? "",
  };
};
