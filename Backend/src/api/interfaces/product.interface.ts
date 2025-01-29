export interface CreateProductDto {
    categoryID?: number;
    name: string;
    description?: string;
    price: number;
    stock?: number;
    image_url: string;
    created_at?: Date;
}

export interface UpdateProductDto {
    name?: string;
    description?: string;
    price?: number;
    stock?: number;
    image_url?: string;
    categoryID?: number;
    created_at?: Date;
}
