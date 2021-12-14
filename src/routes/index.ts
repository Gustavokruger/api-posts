import { Router } from "express";
import categoriesRouter from "./categories.routes";
import postsRouter from "./posts.routes"
import usersRouter from "./users.routes";

const routes = Router()
    .use('/posts', postsRouter)
    .use('/categories', categoriesRouter)
    .use('/users', usersRouter);

export default routes;
