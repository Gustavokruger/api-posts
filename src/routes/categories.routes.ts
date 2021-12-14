import { Router } from "express";
import { getCustomRepository } from "typeorm";
import CategoriesRepository from "../repositories/CategoriesRepository";
import CreateCategoryService from "../services/categories/CreateCategoryService";

const categoriesRouter = Router();


categoriesRouter.post('/create', async (req, res) => {
    try {
        const { title } = req.body;
        return await res.json(await new CreateCategoryService().execute({ title }));
    }
    catch (err) {
        return res.status(400).json({ error: err.message });
    }


});

categoriesRouter.get('/getAll', async (req, res) => {

    const categoriesRepository = getCustomRepository(CategoriesRepository)

    return res.json(await categoriesRepository.getAll());

});

export default categoriesRouter;
