import { Payment } from "@prisma/client";
import prismaClient from "../../prisma/prisma.client";
import { CreatePaymentDto, UpdatePaymentDto } from "../interfaces/payment.interface";

export const fetchPayments = async (): Promise<Payment[]> => {
    return await prismaClient.payment.findMany({});
};

export const createPayment = async (paymentData: CreatePaymentDto): Promise<Payment> => {
    return await prismaClient.payment.create({
        data: paymentData
    });
};

export const readPayment = async (paymentID: number): Promise<Payment | null> => {
    return await prismaClient.payment.findUnique({
        where: { paymentID }
    });
};

export const updatePayment = async (paymentID: number, paymentData: UpdatePaymentDto): Promise<Payment> => {
    return await prismaClient.payment.update({
        where: { paymentID },
        data: paymentData
    });
};

export const deletePayment = async (paymentID: number): Promise<void> => {
    await prismaClient.payment.delete({
        where: { paymentID }
    });
};
