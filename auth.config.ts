import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./app/_schema";
import { connectToDb } from "./app/_lib/mongoose";
import { findUserbyEmail } from "./app/_model/userModel";
import bcrypt from "bcryptjs";

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validated = LoginSchema.safeParse(credentials);

        if (validated.success) {
          const { email, password } = validated.data;

          const resp = await fetch(
            `learnflix-git-smscreen-mikeedaws-projects.vercel.app/api/mongoose/findUser`,
            {
              method: "POST",
              body: JSON.stringify({ email: email }),
            }
          );
          const user = await resp.json();

          if (!user || !user.password) return null;

          const passMatch = await bcrypt.compare(password, user.password);

          if (passMatch) {
            console.log("MATCH: ", user);
            return user;
          } else {
            console.log("hindi match");
            return null;
          }
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
