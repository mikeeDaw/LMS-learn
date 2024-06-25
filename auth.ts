import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./app/_lib/db";
import { connectToDb } from "./app/_lib/mongoose";
import { createUser, userModel } from "./app/_model/userModel";

export const { auth, handlers, signIn, signOut } = NextAuth({
  pages: {
    error: "/login",
  },
  callbacks: {
    async signIn({ account, user }) {
      await connectToDb();

      if (account && account.provider === "google") {
        const theUser = await userModel.findOne({ email: user.email });
        if (theUser) {
          if (!user.hasOwnProperty("userRole")) {
            await userModel.findOneAndUpdate(
              { email: user.email },
              {
                $set: { userRole: "USER" },
              },
              { strict: false }
            );
            return true;
          } else {
            console.log("Sa else");
            return true;
          }
        }
      }
      return true;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.userData = user;
      }
      return token;
    },
  },
  adapter: MongoDBAdapter(clientPromise),
  ...authConfig,
  session: { strategy: "jwt" },
});
