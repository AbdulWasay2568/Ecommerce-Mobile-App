import { ProductReview } from "@prisma/client";
import prismaClient from "../../prisma/prisma.client";
import { CreateProductReviewDto, UpdateProductReviewDto } from "../interfaces/productReview.interface";

export const fetchProductReviews = async (): Promise<ProductReview[]> => {
    return await prismaClient.productReview.findMany({});
};

export const createProductReview = async (productReviewData: CreateProductReviewDto): Promise<ProductReview> => {
    return await prismaClient.productReview.create({
        data: productReviewData,
    });
};

export const readProductReview = async (reviewID: number): Promise<ProductReview | null> => {
    return await prismaClient.productReview.findUnique({
        where: { reviewID },
    });
};

export const updateProductReview = async (reviewID: number, productReviewData: UpdateProductReviewDto): Promise<ProductReview> => {
    return await prismaClient.productReview.update({
        where: { reviewID },
        data: productReviewData,
    });
};

export const deleteProductReview = async (reviewID: number): Promise<void> => {
    await prismaClient.productReview.delete({
        where: { reviewID },
    });
};
