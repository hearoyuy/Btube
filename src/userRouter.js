import express from "express"

const userRouter = express.Router();

userRouter.get("edit", (req, res) =>{
    res.send('user edit!!! {userRouter}')
});
userRouter.get("remove", (req, res) =>{
    res.send('user Remover!!! {userRouter}')
});


export default userRouter;