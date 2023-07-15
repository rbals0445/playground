import cors from "cors";
import express from "express";
import https from "https";
// TODO. path alias 이용, 추가 모듈 설치 필요.
import registerRouter from "./api";
import { getCertConfig } from "./config";

function main() {
  const app = express();
  const port = 443;
  const credentials = getCertConfig();

  app.use(cors({ origin: "https://localhost:9000" }));
  registerRouter(app);

  https.createServer(credentials, app).listen(port, () => {
    console.log(`[https server]: Server is listening port:${port}`);
  });
}

main();
