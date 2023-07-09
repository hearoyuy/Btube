import express from "express"
import morgan from "morgan"
import globalRouter from "./routers/globalRouter.js"
import userRouter from "./userRouter.js"
import videoRouter from "./routers/videoRouter.js"

const app = express();
const port = 80;
const logger = morgan("combined");

app.use(logger);

const home =(req, res) =>{
    console.log(`home`)
    res.send('handle home')
}


app.use('/', globalRouter);
app.use('/user', userRouter);
app.use('/videos', videoRouter);
//app.get('/join', handleJoin)
//app.get('/login', handleLogin)
//app.get('/search', handleSearch)
//app.get('/user/edit', handleUserEdit);
//app.get('/user/remove', handleRemover);
//app.get('/video/upload', handleVideosUpload);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});