export interface CreateUserDto {
    username: string;
    email: string;
    password: string;
    address?: string;
    createdAt?: Date;
}

export interface UpdateUserDto {
    username?: string;
    email?: string;
    password?: string;
    address?: string;
    createdAt?: Date;
}
