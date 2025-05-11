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

// Create a new applicant (Step 5 data) in Hasura
export const hasuraCreateStep5Data = async (
  userId: string,
  data: Step5Data
): Promise<void> => {
  const user = await hasuraFetchUserData(userId);

  const mutation = gql`
    mutation CreateApplication($data: applicants_insert_input!) {
      insert_applicants_one(object: $data) {
        id
        user_id
        full_name
        email
        preferred_contact
        country
        current_role
        educational_background
        expertise
        cancer_research
        publications
        motivation
        perspectives
        decentralization
        hours_per_month
        contributions
        conflict_of_interest
        additional_info
        cv_link
      }
    }
  `;

  const variables = {
    data: {
      user_id: userId,
      full_name: user.name || "",
      email: user.email || "",
      preferred_contact: "", // Optional data, adjust as necessary
      country: "", // Optional data, adjust as necessary
      current_role: "", // Optional data, adjust as necessary
      educational_background: "", // Optional data, adjust as necessary
      expertise: "", // Optional data, adjust as necessary
      cancer_research: "", // Optional data, adjust as necessary
      publications: "", // Optional data, adjust as necessary
      motivation: "", // Optional data, adjust as necessary
      perspectives: "", // Optional data, adjust as necessary
      decentralization: "", // Optional data, adjust as necessary
      hours_per_month: 0, // Optional data, adjust as necessary
      contributions: [], // Optional data, adjust as necessary
      conflict_of_interest: "", // Optional data, adjust as necessary
      additional_info: data.additionalInfo,
      cv_link: data.cvLink,
    },
  };

  const res = await fetch(process.env.HASURA_GRAPHQL_ENDPOINT!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": process.env.HASURA_SECRET!,
    },
    body: JSON.stringify({ query: mutation, variables }),
  });

  if (!res.ok) {
    throw new Error("Failed to create step 5 data");
  }

  const resJson = await res.json();
  if (resJson.errors) {
    throw new Error(resJson.errors[0].message || "An error occurred");
  }

  if (!resJson.data?.insert_applicants_one) {
    throw new Error("Failed to insert new applicant data");
  }
};

// Update step5 data in Hasura
export const hasuraUpdateStep5Data = async (
  userId: string,
  jobId: string,
  data: Step5Data
): Promise<void> => {
  const user = await hasuraFetchUserData(userId);

  const mutation = gql`
    mutation UpdateApplicationData(
      $userId: uuid!
      $jobId: uuid!
      $data: applicants_set_input!
    ) {
      update_applicants(
        where: { user_id: { _eq: $userId }, job_id: { _eq: $jobId } }
        _set: $data
      ) {
        returning {
          id
          user_id
          job_id
          full_name
          email
          preferred_contact
          country
          current_role
          educational_background
          expertise
          cancer_research
          publications
          motivation
          perspectives
          decentralization
          hours_per_month
          contributions
          conflict_of_interest
          additional_info
          cv_link
        }
      }
    }
  `;

  const variables = {
    userId,
    jobId,
    data: {
      additional_info: data.additionalInfo,
      cv_link: data.cvLink,
    },
  };

  const res = await fetch(process.env.HASURA_GRAPHQL_ENDPOINT!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": process.env.HASURA_SECRET!,
    },
    body: JSON.stringify({ query: mutation, variables }),
  });

  if (!res.ok) {
    throw new Error("Failed to update step 5 data");
  }

  const resJson = await res.json();
  if (resJson.errors) {
    throw new Error(resJson.errors[0].message || "An error occurred");
  }

  if (!resJson.data?.update_applicants) {
    throw new Error("Failed to update step 5 data");
  }
};
