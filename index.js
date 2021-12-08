import app from './app.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 8080;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connected to MongoDB`);
    app.listen(PORT, () =>
      console.log(`app listening at http://localhost:${PORT}`)
    );
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });
