import mongoose from 'mongoose';
import { db_name } from '../constant.js';

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `mongodb+srv://krishna22:Kartiklala58@krishna.3du78.mongodb.net/${db_name}`
    );
    console.log(
      `Database connected DB host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error('Mongodb connection error ', error);
    process.exit(1);
  }
};
export default connectDB;
