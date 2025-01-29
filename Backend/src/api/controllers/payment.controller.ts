import { Request, Response } from "express";
import { fetchPayments, createPayment, readPayment, updatePayment, deletePayment } from "../services/payment.service";
import { CreatePaymentDto, UpdatePaymentDto } from "../interfaces/payment.interface";

export const fetchPaymentsController = async (req: Request, res: Response): Promise<void> => {
    try {
        const payments = await fetchPayments();
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch payments" });
    }
};

export const createPaymentController = async (req: Request, res: Response): Promise<void> => {
    try {
        const paymentData: CreatePaymentDto = req.body;
        const newPayment = await createPayment(paymentData);
        res.status(201).json(newPayment);
    } catch (error) {
        res.status(500).json({ error: "Failed to create payment" });
    }
};

export const readPaymentController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const payment = await readPayment(Number(id));
        if (payment) {
            res.status(200).json(payment);
        } else {
            res.status(404).json({ error: "Payment not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch payment" });
    }
};

export const updatePaymentController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const paymentData: UpdatePaymentDto = req.body;
        const updatedPayment = await updatePayment(Number(id), paymentData);
        res.status(200).json(updatedPayment);
    } catch (error) {
        res.status(500).json({ error: "Failed to update payment" });
    }
};

export const deletePaymentController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        await deletePayment(Number(id));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Failed to delete payment" });
    }
};
