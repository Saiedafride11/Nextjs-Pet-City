import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app";
dotenv.config();
const port: string | number = process.env.DB_PORT || 8000;

// console.log("database--", process.env.DB_URL);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL as string);
    console.log(`🛢 Database connection successful`);
    app.listen(port, () => console.log(`http://localhost:${port}/`));
  } catch (error) {
    console.log(error);
  }
};

connectDB();

// typescript to js covert
// yarn build
// or
// npm run build
