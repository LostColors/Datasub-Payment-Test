import mongoose from "mongoose";

const main = async () => {
  await mongoose.connect(
    "mongodb+srv://admin:admin@datasub.lhcvb.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("Connected mongo");
};
export default main;
