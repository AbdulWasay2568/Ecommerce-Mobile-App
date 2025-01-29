import { Category } from "@prisma/client";
import prismaClient from "../../prisma/prisma.client";
import { CreateCategoryDto, UpdateCategoryDto } from "../interfaces/category.interface";

export const fetchCategories = async (): Promise<Category[]> => {
    return await prismaClient.category.findMany({});
};

export const createCategory = async (categoryData: CreateCategoryDto): Promise<Category> => {
    return await prismaClient.category.create({
        data: categoryData
    });
};

export const readCategory = async (categoryID: number): Promise<Category | null> => {
    return await prismaClient.category.findUnique({
        where: { categoryID }
    });
};

export const updateCategory = async (categoryID: number, categoryData: UpdateCategoryDto): Promise<Category> => {
    return await prismaClient.category.update({
        where: { categoryID },
        data: categoryData
    });
};

export const deleteCategory = async (categoryID: number): Promise<void> => {
    await prismaClient.category.delete({
        where: { categoryID }
    });
};
