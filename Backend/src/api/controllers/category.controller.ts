import { Request, Response } from "express";
import { fetchCategories, createCategory, readCategory, updateCategory, deleteCategory } from "../services/category.service";
import { CreateCategoryDto, UpdateCategoryDto } from "../interfaces/category.interface";

export const fetchCategoriesController = async (req: Request, res: Response): Promise<void> => {
    try {
        const categories = await fetchCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch categories" });
    }
};

export const createCategoryController = async (req: Request, res: Response): Promise<void> => {
    try {
        const categoryData: CreateCategoryDto = req.body;
        const newCategory = await createCategory(categoryData);
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ error: "Failed to create category" });
    }
};

export const readCategoryController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const category = await readCategory(Number(id));
        if (category) {
            res.status(200).json(category);
        } else {
            res.status(404).json({ error: "Category not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch category" });
    }
};

export const updateCategoryController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const categoryData: UpdateCategoryDto = req.body;
        const updatedCategory = await updateCategory(Number(id), categoryData);
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(500).json({ error: "Failed to update category" });
    }
};

export const deleteCategoryController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        await deleteCategory(Number(id));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Failed to delete category" });
    }
};

// export const fetchProductsByCategoryController = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const { category } = req.params;
//         const products = await fetchProductsByCategory(category);
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({ error: "Failed to fetch products by category" });
//     }
// };