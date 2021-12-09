import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import morganHandler from './middleware/morgan.js';
import errorHandler from './error-handling/error-handler.js';
import apiRouter from './routes/api.js';
import cookieParser from 'cookie-parser';
import { render } from './controllers/app-controller.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(
  morganHandler,
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

app.use(express.static("./build"));
app.get("/", (req, res) => {
  console.log("llllllll")
  res.sendFile("./index.html");
});

app.get("/login", render);
app.get("/sign-up", render);
app.get("/chat", render);

app.use('/api', apiRouter);

app.use(errorHandler);

export default app;
