import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fname: { type: String, require: true },
  lname: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

export const userModel = mongoose.model("Admin", userSchema);
