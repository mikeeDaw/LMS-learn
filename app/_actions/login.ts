"use server";

import * as z from "zod";
import { LoginSchema } from "../_schema";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const googleAction = () => {
  signIn("google", { redirectTo: "/dashboard" });
};

export const logAction = async (values: z.infer<typeof LoginSchema>) => {
  console.log(values);
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
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    console.log(error);
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