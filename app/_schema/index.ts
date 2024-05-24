import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().min(1, "Email is Required").email(),
  password: z.string().min(1, "Password is Required"),
});

export const RegSchema = z
  .object({
    fName: z.string().min(1, "First Name is Required"),
    lName: z.string().min(1, "Last Name is Required"),
    email: z.string().min(1, "Email is Required"),
    password: z.string().min(1, "Password is Required").email(),
    confPass: z.string().min(1, "Confirm Pass is Required"),
  })
  .refine((schema) => schema.password === schema.confPass, {
    message: "Password Don't Match",
    path: ["confPass"],
  });
