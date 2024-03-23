import { Request, Response, NextFunction } from "express";
import * as express from "express";
import * as cors from "cors";
import * as morgan from "morgan";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));




export default app;

