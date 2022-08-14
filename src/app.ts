require("dotenv").config();
import express, { Request, Response } from "express";
import config from "config";
import router from "./router";
import db from "../config/db";
import Logger from "../config/logger";
import morganMiddleware from "./middleware/morganMiddleware";

const app = express();
const port = config.get<number>("port");

app.use(express.json());

app.use(morganMiddleware);

app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ server: "Online" });
});

app.listen(port, async () => {
  await db();
  Logger.info(`Server listen on port ${port}`);
});
