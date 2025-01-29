import { Order } from "@prisma/client";
import prismaClient from "../../prisma/prisma.client";
import { CreateOrderDto, UpdateOrderDto } from "../interfaces/order.interface";

export const fetchOrders = async (): Promise<Order[]> => {
    return await prismaClient.order.findMany({});
};

export const createOrder = async (orderData: CreateOrderDto): Promise<Order> => {
    return await prismaClient.order.create({
        data: orderData
    });
};

export const readOrder = async (orderID: number): Promise<Order | null> => {
    return await prismaClient.order.findUnique({
        where: { orderID }
    });
};

export const updateOrder = async (orderID: number, orderData: UpdateOrderDto): Promise<Order> => {
    return await prismaClient.order.update({
        where: { orderID },
        data: orderData
    });
};

export const deleteOrder = async (orderID: number): Promise<void> => {
    await prismaClient.order.delete({
        where: { orderID }
    });
};
