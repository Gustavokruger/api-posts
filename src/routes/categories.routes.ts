import { Router } from "express";
import Category from "../models/Category";
import Post from "../models/Post";
import CategoriesRepository from "../repositories/CategoriesRepository";
import CreateCategoryService from "../services/categories/CreateCategoryService";

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();
const createCategoryService = new CreateCategoryService(categoriesRepository);

categoriesRouter.post('/create', (req, res) => {
    try{
        const { title } = req.body;
        return res.json(createCategoryService.execute(title));
    }
    catch(err) {
        return  res.status(400).json({error: err.message});
    }


});

categoriesRouter.get('/getAll', (req, res) => {

    return res.json(categoriesRepository.getAll());

});

export default categoriesRouter;
