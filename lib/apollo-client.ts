import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = new HttpLink({
  uri: process.env.HASURA_GRAPHQL_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  const secret = process.env.HASURA_SECRET;
  return {
    headers: {
      ...headers,
      "x-hasura-admin-secret": secret,
    },
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
