import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  userRole: { type: String, require: true, default: "USER" },
  courses: { type: [String], require: true },
  tier: { type: String, require: true, default: "FREE" },
});

const userModel = mongoose.models?.users || mongoose.model("users", userSchema);

export const createUser = (values: Record<string, any>) =>
  new userModel(values).save().then((data: any) => data.toObject());
export const findUserbyEmail = (email: string) =>
  userModel.findOne({ email: email });
export const findUserbyId = (uid: string) => userModel.findOne({ _id: uid });
export const addCourse = (uid: string, code: string) =>
  userModel.updateOne(
    { _id: uid },
    { $push: { courses: code } },
    { new: true }
  );
export const updateUserTier = (tier: string, uid: string) =>
  userModel.updateOne({ _id: uid }, { tier: tier });

export const removeCourse = (code: string, uid: string) =>
  userModel.updateOne({ _id: uid }, { $pullAll: { courses: [code] } });

export const deleteUser = (email: string) =>
  userModel.deleteOne({ email: email });

export { userModel };
