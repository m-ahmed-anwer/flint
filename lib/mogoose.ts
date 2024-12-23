import mongoose from "mongoose";

const connectToDatabase = async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI!);
  } catch (error) {
    throw new Error("Database connection failed");
  }
};

export default connectToDatabase;
