import { Router } from "express";
import Post from "../models/Post";

const postsRouter = Router();

postsRouter.post('/', (req, res) => {
    const { entry } = req.body;

    const post = new Post(entry);

});

export default postsRouter;
