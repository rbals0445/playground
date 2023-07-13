import express from 'express'
import https from 'https';
import fs from 'fs'

const app = express();
const port = 9090;
const privateKey = fs.readFileSync("key.pem");
const certificate = fs.readFileSync("cert.pem");
const credentials = {key: privateKey, cert: certificate};


app.get('/',(req,res,next) => {
    console.log("test");
    res.send("Hello from express server")
})


https.createServer(credentials,app).listen(port,()=>{
    console.log(`[https server]: Server is listening port:${port}`);
})

