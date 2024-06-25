import mongoose from "mongoose";

const Schema = mongoose.Schema;

const tierSchema = new Schema(
  {
    tierLabel: {
      type: "FREE" || "PREMIUM" || "ASTRO",
      unique: true,
      required: true,
    },
    price: { type: Number },
    features: { type: [String] },
  },
  { timestamps: true }
);

const tierModel = mongoose.models?.tiers || mongoose.model("tiers", tierSchema);

export default tierModel;
