import { Request, Response } from "express";
import { fetchProducts, createProduct, readProduct, updateProduct, deleteProduct } from "../services/product.service";
import { CreateProductDto, UpdateProductDto } from "../interfaces/product.interface";

export const fetchProductsController = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await fetchProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch products" });
    }
};

export const createProductController = async (req: Request, res: Response): Promise<void> => {
    try {
        const productData: CreateProductDto = req.body;
        const newProduct = await createProduct(productData);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: "Failed to create product" });
    }
};

export const readProductController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const product = await readProduct(Number(id));
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch product" });
    }
};

export const updateProductController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const productData: UpdateProductDto = req.body;
        const updatedProduct = await updateProduct(Number(id), productData);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: "Failed to update product" });
    }
};

export const deleteProductController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        await deleteProduct(Number(id));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Failed to delete product" });
    }
};
