import { Request, Response } from "express";
import {
    fetchProductReviews,
    createProductReview,
    readProductReview,
    updateProductReview,
    deleteProductReview,
} from "../services/productReview.service";
import { CreateProductReviewDto, UpdateProductReviewDto } from "../interfaces/productReview.interface";

export const fetchProductReviewsController = async (req: Request, res: Response): Promise<void> => {
    try {
        const productReviews = await fetchProductReviews();
        res.status(200).json(productReviews);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch product reviews" });
    }
};

export const createProductReviewController = async (req: Request, res: Response): Promise<void> => {
    try {
        const productReviewData: CreateProductReviewDto = req.body;
        const newProductReview = await createProductReview(productReviewData);
        res.status(201).json(newProductReview);
    } catch (error) {
        res.status(500).json({ error: "Failed to create product review" });
    }
};

export const readProductReviewController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const productReview = await readProductReview(Number(id));
        if (productReview) {
            res.status(200).json(productReview);
        } else {
            res.status(404).json({ error: "Product review not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch product review" });
    }
};

export const updateProductReviewController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const productReviewData: UpdateProductReviewDto = req.body;
        const updatedProductReview = await updateProductReview(Number(id), productReviewData);
        res.status(200).json(updatedProductReview);
    } catch (error) {
        res.status(500).json({ error: "Failed to update product review" });
    }
};

export const deleteProductReviewController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        await deleteProductReview(Number(id));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Failed to delete product review" });
    }
};
