import { Product } from "@prisma/client";
import prismaClient from "../../prisma/prisma.client";
import { CreateProductDto, UpdateProductDto } from "../interfaces/product.interface";

export const fetchProducts = async (): Promise<Product[]> => {
    return await prismaClient.product.findMany({});
};

export const createProduct = async (productData: CreateProductDto): Promise<Product> => {
    return await prismaClient.product.create({
        data: productData
    });
};

export const readProduct = async (productID: number): Promise<Product | null> => {
    return await prismaClient.product.findUnique({
        where: { productID }
    });
};

export const updateProduct = async (productID: number, productData: UpdateProductDto): Promise<Product> => {
    return await prismaClient.product.update({
        where: { productID },
        data: productData
    });
};

export const deleteProduct = async (productID: number): Promise<void> => {
    await prismaClient.product.delete({
        where: { productID }
    });
};
