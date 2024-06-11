import { ObjectId } from "mongodb";
import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

const accSchema = new Schema({
  userId: { type: ObjectId },
  type: { type: String },
  provider: { type: String },
  providerAccountId: { type: String },
  refresh_token: { type: String },
  access_token: { type: String },
  expires_at: { type: Number },
  token_type: { type: String },
  scope: { type: String },
  id_token: { type: String },
  session_state: { type: String },
});

const accModel =
  mongoose.models?.accounts || mongoose.model("accounts", accSchema);

export const getAll = () => accModel.find({});

export const getAcc = (iod: ObjectId) => accModel.find({ userId: iod });

export const delAccountGoogle = (oid: ObjectId) =>
  accModel.deleteOne({ userId: oid });
