import dotenv from 'dotenv'
dotenv.config();

import mongoose from 'mongoose'
import { log } from 'node:console';
mongoose
.connect(process.env.MONGO_URL as string, {})
.then((data) => {
  console.log('MongoDb connection succus');
})
.catch((err) => {
  console.log('ERROR:', err);
})