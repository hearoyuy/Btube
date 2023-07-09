import express from "express";

const videoRouter = express.Router();

videoRouter.get("/upload", (req, res) =>{
    res.send('video upload!! {videoRouter}')
})

export default videoRouter;