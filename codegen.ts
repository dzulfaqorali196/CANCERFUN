require("dotenv").config();

module.exports = {
  schema: [
    {
      "https://pure-amoeba-39.hasura.app/v1/graphql": {
        headers: {
          "x-hasura-admin-secret": process.env.HASURA_SECRET,
        },
      },
    },
  ],
  documents: ["./hasura/gql/*.graphql"],
  overwrite: true,
  generates: {
    "./hasura/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
