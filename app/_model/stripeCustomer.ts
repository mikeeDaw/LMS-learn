import mongoose from "mongoose";

const Schema = mongoose.Schema;

const stripeCustomer = new Schema(
  {
    customerId: { type: String },
    userId: { type: String },
  },
  { timestamps: true }
);

const stripeCusModel =
  mongoose.models?.stripeCustomers ||
  mongoose.model("stripeCustomers", stripeCustomer);

export const findStripeCustomer = (uid: string) =>
  stripeCusModel.findOne({ userId: uid });
export const createStripeCustomer = (uid: string, stripeUID: string) =>
  stripeCusModel.create({ userId: uid, customerId: stripeUID });

export default stripeCusModel;
