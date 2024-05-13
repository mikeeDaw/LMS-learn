import email from "next-auth/providers/email";
import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is Required." }),
  password: z.string({ message: "Password is Required" }),
});

export const RegSchema = z.object({
  fName: z.string(),
  lName: z.string(),
  email: z.string().email(),
  password: z.string(),
  confPass: z.string()
});
