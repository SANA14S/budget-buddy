import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
   console.log("ENV URI:", process.env.MONGODB_URI);
   
  try {
    await mongoose.connect((process.env.MONGODB_URI as string) || "");
    console.log(`🟢 Connected to MongoDB!`);
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
