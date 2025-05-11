const GoogleConfig = {
  clientId: process.env.AUTH_GOOGLE_ID as string,
  clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
};
// const GithubConfig = {
//   clientId: process.env.AUTH_GITHUB_ID as string,
//   clientSecret: process.env.AUTH_GITHUB_SECRET as string,
// };
// const FacebookConfig = {
//   clientId: process.env.AUTH_FACEBOOK_ID as string,
//   clientSecret: process.env.AUTH_FACEBOOK_SECRET as string,
// };
const TwitterConfig = {
  clientId: process.env.AUTH_TWITTER_ID as string,
  clientSecret: process.env.AUTH_TWITTER_SECRET as string,
};

export { GoogleConfig, TwitterConfig };
