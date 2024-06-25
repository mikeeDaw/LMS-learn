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

export default stripeCusModel;
