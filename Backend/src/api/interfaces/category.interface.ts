export interface CreateCategoryDto {
    name: string;
    createdAt?: Date;
}

export interface UpdateCategoryDto {
    name?: string;
    createdAt?: Date;
}
