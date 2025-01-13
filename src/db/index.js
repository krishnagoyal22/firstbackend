import mongoose from 'mongoose';
import { db_name } from '../constants.js';

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.mongoURI}/${db_name}`
    );
    console.log(
      `Database connected DB host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error('connection error ', error);
    process.exit(1);
  }
};
export default connectDB;
