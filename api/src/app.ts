import express from "express";
import cors from "cors";

import { reqLogger } from "./middlewares/logger";

import * as routes from "./routes/";

class App {
  public server: any;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: false }));
  }

  routes() {
    this.server.use("/api/table", reqLogger, routes.TableRouter);
  }
}

export default new App().server;
