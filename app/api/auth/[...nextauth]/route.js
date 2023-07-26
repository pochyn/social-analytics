import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { CognitoIdentityServiceProvider } from "aws-sdk";
import calculateSecretHash from "@/utils/calculateHash";
require("dotenv").config();

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Cognito",
      credentials: {},
      authorize: async (credentials) => {
        const cognitoProvider = new CognitoIdentityServiceProvider({
          region: "us-east-1",
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        });

        const params = {
          AuthFlow: "USER_PASSWORD_AUTH",
          ClientId: process.env.COGNITO_CLIENT_ID,
          AuthParameters: {
            USERNAME: credentials.username,
            PASSWORD: credentials.password,
            SECRET_HASH: calculateSecretHash(
              process.env.COGNITO_CLIENT_ID,
              process.env.COGNITO_CLIENT_SECRET,
              credentials.username
            ),
          },
        };

        try {
          const authResult = await cognitoProvider
            .initiateAuth(params)
            .promise();
          if (authResult && authResult.AuthenticationResult) {
            const userDetailsParams = {
              AccessToken: authResult.AuthenticationResult.AccessToken,
            };

            const userDetails = await cognitoProvider
              .getUser(userDetailsParams)
              .promise();
            if (userDetails && userDetails.UserAttributes) {
              const email = userDetails.UserAttributes.find(
                (attribute) => attribute.Name === "email"
              );
              const account_type = userDetails.UserAttributes.find(
                (attribute) => attribute.Name === "custom:account_type"
              );

              return {
                id: userDetails.Username,
                name: userDetails.Username,
                email: email ? email.Value : null,
                account_type: account_type ? account_type.Value : null,
              };
            }
          } else {
            return null;
          }
        } catch (error) {
          throw new Error("Authentication failed");
        }
      },
    }),
  ],
  pages: {
    // signIn: "/sign-in",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
    newUser: null,
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.account_type = user.account_type;
      }
      return token;
    },
    async session(session, user) {
      session.user = user;
      return session;
    },
  },
  session: {
    jwt: true,
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
