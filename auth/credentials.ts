import { HasuraLogin } from "@/auth/hasura/login";
import type {
  CredentialInput,
  CredentialsConfig,
} from "next-auth/providers/credentials";

export type MyCredentialsInputs = {
  email: CredentialInput;
  password: CredentialInput;
};

export const credentialConfig: Partial<CredentialsConfig<MyCredentialsInputs>> =
  {
    name: "Credentials",
    credentials: {
      email: {
        label: "Email",
        type: "email",
        placeholder: "you@example.com",
      },
      password: {
        label: "Password",
        type: "password",
      },
    },
    async authorize(credentials, request) {
      if (!credentials?.email || !credentials?.password) {
        throw new Error("Missing email or password");
      }
      const user = await HasuraLogin({
        email: credentials.email,
        password: credentials.password,
      });
      return {
        ...user,
        emailAddresses: [{ emailAddress: user.email }],
      };
    },
  };
