import dotenv from 'dotenv'
dotenv.config();
import app from './app';

import mongoose from 'mongoose'
import { log } from 'node:console';
mongoose
.connect(process.env.MONGO_URL as string, {})
.then((data) => {
  console.log('MongoDb connection succus');
  const PORT = process.env.PORT ?? 3000;
  app.listen(PORT, function () {
    console.log(`This server is running succesfully on port: ${PORT}`);
  })
})
.catch((err) => {
  console.log('ERROR:', err);
})