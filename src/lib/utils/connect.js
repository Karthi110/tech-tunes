import mongoose from "mongoose";

let isConnected = false;

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    isConnected = true;
  } catch (error) {
    throw new Error("connection Failed");
  }
};

export default connectToDB;
