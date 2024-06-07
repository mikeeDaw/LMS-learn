"use server";

import * as z from "zod";
import { LoginSchema } from "../_schema";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { connectToDb } from "../_lib/mongoose";

export const googleAction = async () => {
  await signIn("google", { redirectTo: "/" });
};

export const logAction = async (values: z.infer<typeof LoginSchema>) => {
  // Validate the fields again in server
  const validatedFields = LoginSchema.safeParse(values);

  // Login Not successful. Error is 'True'
  if (!validatedFields.success) {
    return { error: true, msg: "Invalid Input." };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/browse",
    });
  } catch (error) {
    console.log("onError", error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: true, msg: "Invalid Credentials" };
        default:
          return { error: true, msg: "Something went Wrong..." };
      }
    }
    throw error;
  }

  // Login Successful. No Errors
  return { error: false, msg: "Login Successful" };
};
