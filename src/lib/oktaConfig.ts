export const oktaConfig = {
  clientId: "0oakh3ju4i6jV3REn5d7",
  issuer: "https://dev-62085010.okta.com",
  redirectUri: "http://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsChecks: true,
};
