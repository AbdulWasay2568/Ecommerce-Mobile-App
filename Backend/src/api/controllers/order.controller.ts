import { Request, Response } from "express";
import { fetchOrders, createOrder, readOrder, updateOrder, deleteOrder } from "../services/order.service";
import { CreateOrderDto, UpdateOrderDto } from "../interfaces/order.interface";

export const fetchOrdersController = async (req: Request, res: Response): Promise<void> => {
    try {
        const orders = await fetchOrders();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch orders" });
    }
};

export const createOrderController = async (req: Request, res: Response): Promise<void> => {
    try {
        const orderData: CreateOrderDto = req.body;
        const newOrder = await createOrder(orderData);
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ error: "Failed to create order" });
    }
};

export const readOrderController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const order = await readOrder(Number(id));
        if (order) {
            res.status(200).json(order);
        } else {
            res.status(404).json({ error: "Order not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch order" });
    }
};

export const updateOrderController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const orderData: UpdateOrderDto = req.body;
        const updatedOrder = await updateOrder(Number(id), orderData);
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json({ error: "Failed to update order" });
    }
};

export const deleteOrderController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        await deleteOrder(Number(id));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Failed to delete order" });
    }
};
