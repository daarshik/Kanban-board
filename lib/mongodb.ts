import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const mongodbUri = process.env.MONGODB_URI; 

    if (!mongodbUri) {
      throw new Error("MONGODB_URI environment variable is not defined");
    }

    await mongoose.connect(mongodbUri);
  } catch (error) {
    console.error(error);
  }
};

export default connectMongoDB;
