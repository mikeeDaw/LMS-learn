import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./app/_lib/db";
import { connectToDb } from "./app/_lib/mongoose";
import { userModel } from "./app/_model/userModel";

export const { auth, handlers, signIn, signOut } = NextAuth({
  callbacks: {
    async signIn({ account, user }) {
      await connectToDb();
      console.log("Account: ", account);
      console.log("Userxxx:", user);
      if (account && account.provider === "google") {
        if (!user.hasOwnProperty("userRole")) {
          await userModel.findByIdAndUpdate(
            { _id: user.id },
            {
              $set: { userRole: "USER" },
            },
            { strict: false }
          );
        } else {
          console.log("hindi ka na bago");
        }
      }
      return true;
    },
    async session({ token, session }) {
      console.log({
        sessionToken: token,
        session,
      });

      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token, user }) {
      console.log("token:", token);

      if (user) {
        token.userData = user;
      }
      // console.log("User:", user);
      return token;
    },
  },
  adapter: MongoDBAdapter(clientPromise),
  ...authConfig,
  session: { strategy: "jwt" },
});
