"use server";

import bcrypt from "bcrypt";
import * as z from "zod";
import { RegSchema } from "../_schema";
import { createUser, userModel } from "../_model/userModel";
import mongoose from "mongoose";
import { connectToDb } from "../_lib/mongoose";
import { error } from "console";

export const regAction = async (values: z.infer<typeof RegSchema>) => {
  await connectToDb();

  const validated = RegSchema.safeParse(values);
  // If Registration Fails
  if (!validated.success) {
    return { error: true, msg: "Invalid Input." };
  }

  const { fName, password, confPass, lName, email } = values;

  const existingUsr = await userModel.findOne({ email: email });

  if (existingUsr) {
    return { error: true, msg: "Email is Already in Use." };
  }

  if (password !== confPass) {
    console.log("hindi match");
    return { error: true, msg: "Password Dont Match." };
  }

  const hashPass = await bcrypt.hash(password, 10);

  try {
    console.log(fName, lName, email, password, "DDD");
    await createUser({
      name: `${fName} ${lName}`,
      email: email,
      password: hashPass,
      userRole: "USER",
      courses: [],
      tier: "FREE",
    });
    console.log("tumuloy");
  } catch (error) {
    console.log(error);
  }

  return { error: false, msg: "Creation Successful" };
};
