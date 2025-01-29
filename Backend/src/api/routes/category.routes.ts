import { Router } from "express";
import {
    fetchCategoriesController,
    createCategoryController,
    readCategoryController,
    updateCategoryController,
    deleteCategoryController
} from "../controllers/category.controller";

const categoryRoutes: Router = Router();

categoryRoutes.get('/', fetchCategoriesController);
categoryRoutes.post('/', createCategoryController);
categoryRoutes.get('/:id', readCategoryController);
categoryRoutes.put('/:id', updateCategoryController);
categoryRoutes.delete('/:id', deleteCategoryController);

export default categoryRoutes;
