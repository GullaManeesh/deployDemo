import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => console.log("mongodb connected"));
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.log("connection error:", error.messsage);
    process.exit(1);
  }
};
