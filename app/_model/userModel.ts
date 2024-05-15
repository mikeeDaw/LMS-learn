import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fName: { type: String, require: true },
  lName: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

const userModel = mongoose.models?.users || mongoose.model("users", userSchema);

export const createUser = (values: Record<string, any>) =>
  new userModel(values).save().then((data: any) => data.toObject());
export const findUserbyEmail = (email: string) => userModel.findOne({ email });

export { userModel };
