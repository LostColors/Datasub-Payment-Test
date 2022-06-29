import mongoose from "mongoose";

const paymentSchema = mongoose.Schema({
  CardNumber: String,
  ExpDate: String,
  Cvv: String,
  Amount: String,
});

const paymentModel =
  mongoose.model("payment") || mongoose.model("payment", paymentSchema);

export default paymentModel;
