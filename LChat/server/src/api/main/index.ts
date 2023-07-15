import { Express, Request, Response, NextFunction } from "express";
function registerMainRouter(app: Express) {
  app.get("/", (req: Request, res: Response, next: NextFunction) => {
    console.log("test");
    res.status(200).json({ me: "world" });
  });
}

export default registerMainRouter;
