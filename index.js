import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;
const logger = morgan("dev");

app.use(logger);
/*
const middleWare = (req,res,next)=>{
    console.log('LOGGED');
    next();
}; */


app.get('/', (req, res) => {
  console.log('homg 11');
  res.send('Hello World! node watching')
})
/*app.use(middleWare);*/
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})