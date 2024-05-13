"use server";

import * as z from "zod";
import { LoginSchema } from "../_schema";

export const logAction = async (values: z.infer<typeof LoginSchema>) => {
  console.log(values);
  // Validate the fields again in server
  const validatedFields = LoginSchema.safeParse(values);

  // Login Not successful. Error is 'True'
  if (!validatedFields.success) {
    return true;
  }

  // Login Successful. No Errors
  return false;
};
