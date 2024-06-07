import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  userRole: { type: String, require: true, default: true },
  courses: { type: [String], require: true },
});

const userModel = mongoose.models?.users || mongoose.model("users", userSchema);

export const createUser = (values: Record<string, any>) =>
  new userModel(values).save().then((data: any) => data.toObject());
export const findUserbyEmail = (email: string) => userModel.findOne({ email });
export const findUserbyId = (uid: string) => userModel.findOne({ _id: uid });
export const addCourse = (uid: string, code: string) =>
  userModel.updateOne(
    { _id: uid },
    { $push: { courses: code } },
    { new: true }
  );

export { userModel };
