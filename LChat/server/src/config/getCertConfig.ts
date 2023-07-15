import fs from "fs";

function getCertConfig() {
  const privateKey = fs.readFileSync("private-key.pem");
  const certificate = fs.readFileSync("certificate.pem");

  return { key: privateKey, cert: certificate };
}

export default getCertConfig;
