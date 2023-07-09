import  express from "express";

const globalRouter = express.Router();

globalRouter.get("/", (req,res) => {
    res.send('welcome btube enjoy') 
});

globalRouter.get("/join", (req, res) =>{
    res.send('join!!! {globalRouter}')
});

globalRouter.get("/login", (req, res) =>{
    res.send('login!!! {globalRouter}')
});

globalRouter.get("/search", (req, res) =>{
    res.send('search!!! {globalRouter}')
});
globalRouter.get("/user/eidt", (req, res) =>{
    res.send('user eidt!!! {globalRouter}')
});
globalRouter.get("/user/Remover", (req, res) =>{
    res.send('user Remover!!! {globalRouter}')
});
globalRouter.get("/video/upload", (req, res) =>{
    res.send('handleVideosUpload!!! {globalRouter}')
});


export default globalRouter;