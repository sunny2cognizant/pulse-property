import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set('strictQuery',true);
  if (connected) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("MongoDB connected....");
  } catch (error) {
    console.error("MongoDB connection failed", error);
  }
}

export default connectDB;