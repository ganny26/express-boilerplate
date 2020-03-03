import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();

app.disable("x-powered-by");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware for logging HTTP request
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));

export default app;
