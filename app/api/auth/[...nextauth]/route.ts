import NextAuth from "next-auth/next";
import type { NextApiRequest, NextApiResponse } from "next";
import GoogleProvier from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvier({
      clientId: process.env.GOOGLE_CLIENT!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Name here...",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, req) => {
        // Logic here getting the user from database
        const user = {
          name: "Grey Matter",
          email: "grey.matter@gmail.com",
          id: "23",
        };
        console.log("Credentials:", credentials, "req:", req);
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
    // ...add more providers here
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },

    async session({ session, token }: { session: any; token: any }) {
      if (session.user) {
        session.user.email = token.email;
        session.user.name = token.normalize;
      }
      console.log(session);
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET!

};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
