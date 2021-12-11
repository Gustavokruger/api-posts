import { Router } from "express";
import Post from "../models/Post";
import User from "../models/User";
import UsersRepository from "../repositories/UsersRepository";

const usersRouter = Router();
const usersRepository = new UsersRepository();

usersRouter.post('/', (req, res) => {
    const { entry } = req.body;

    const user = new User(entry);

    return res.json()

});

export default usersRouter;
