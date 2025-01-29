export interface CreateProductReviewDto {
    productID: number;
    userID: number;
    rating: number;
    review?: string;
    created_at: Date;
}

export interface UpdateProductReviewDto {
    productID?: number;
    userID?: number;
    rating?: number;
    review?: string;
    created_at?: Date;
}
