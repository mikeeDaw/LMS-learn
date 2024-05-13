"use server";

import bcrypt from "bcrypt";
import * as z from "zod";
import { RegSchema } from "../_schema";

export const regAction = async (values: z.infer<typeof RegSchema>) => {
  const { fName, password } = values;

  const hashPass = await bcrypt.hash(password, 10);

  console.log(values, hashPass);
  return true;
};
