import express, { Request, Response, NextFunction } from "express";
import https from "https";
import fs from "fs";
import cors from "cors";

function main() {
  const app = express();
  const port = 443;
  app.use(cors({ origin: "https://localhost:9000" }));

  const privateKey = fs.readFileSync("private-key.pem");
  const certificate = fs.readFileSync("certificate.pem");
  const credentials = { key: privateKey, cert: certificate };

  app.get("/", (req: Request, res: Response, next: NextFunction) => {
    console.log("test");
    res.status(200).json({ me: "world" });
  });

  https.createServer(credentials, app).listen(port, () => {
    console.log(`[https server]: Server is listening port:${port}`);
  });
}

main();
