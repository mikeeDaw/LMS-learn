"use server";

import { signOut } from "@/auth";
import { connectToDb } from "../_lib/mongoose";
import { removeStudentFromMany } from "../_model/courseModel";
import { deleteUser, findUserbyEmail } from "../_model/userModel";
import { delAccountGoogle, getAcc, getAll } from "../_model/accountsModel";

export const deleteAcc = async (email: string) => {
  await connectToDb();

  try {
    const user = await findUserbyEmail(email);
    await removeStudentFromMany(user.courses, user._id.toString());
    await deleteUser(email);
    const del = await delAccountGoogle(user._id);
    console.log("delete", del);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
