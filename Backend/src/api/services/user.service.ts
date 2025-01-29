import { User } from "@prisma/client";
import prismaClient from "../../prisma/prisma.client";
import { CreateUserDto, UpdateUserDto } from "../interfaces/user.interface";

export const fetchUsers = async (): Promise<User[]> => {
    return await prismaClient.user.findMany({});
};

export const createUser = async (userData: CreateUserDto): Promise<User> => {
    const { email } = userData;

    // Check if the user already exists
    const existingUser = await prismaClient.user.findUnique({ where: { email } });
    if (existingUser) {
        throw new Error("Email already taken, please use another email.");
    }

    return await prismaClient.user.create({
        data: userData
    });
};

export const readUser = async (userID: number): Promise<User | null> => {
    return await prismaClient.user.findUnique({
        where: { userID }
    });
};

export const updateUser = async (userID: number, userData: UpdateUserDto): Promise<User> => {
    return await prismaClient.user.update({
        where: { userID },
        data: userData
    });
};

export const deleteUser = async (userID: number): Promise<void> => {
    await prismaClient.user.delete({
        where: { userID }
    });
};
