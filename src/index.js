require("dotenv").config({path:"./env"})

//at 33:00 in connect db yt video import method 


import mongoose, { connect } from 'mongoose';

import { db_name } from './constants';

import connectDB from './db/index.js';

connectDB();

// import express from 'express';
// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.mongoURI}/${db_name}`);
//     app.on('error', (error) => {
//       console.error('error', error);
//       throw error;
//     });
//     app.listen(process.env.port, () => {
//       console.log(`Server is running on port ${process.env.port}`);
//     });
//   } catch (error) {
//     console.error('error', error);
//     throw error;
//   }
// })();
