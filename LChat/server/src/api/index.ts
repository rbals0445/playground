import { Express } from "express";
import registerMainRouter from "./main";

function registerRouter(app: Express) {
  registerMainRouter(app);
}

export default registerRouter;
