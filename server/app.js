import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import morganHandler from './middleware/morgan.js';
import errorHandler from './error-handling/error-handler.js';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(
  morganHandler,
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

app.use(express.static("../client/build"));
app.get("/", (req, res) => {
  res.sendFile("/index.html");
});

app.use(errorHandler);

export default app;
