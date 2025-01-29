import { ShippingInfo } from "@prisma/client";
import prismaClient from "../../prisma/prisma.client";
import { CreateShippingInfoDto, UpdateShippingInfoDto } from "../interfaces/shippingInfo.interface";

export const fetchShippingInfos = async (): Promise<ShippingInfo[]> => {
    return await prismaClient.shippingInfo.findMany({});
};

export const createShippingInfo = async (shippingInfoData: CreateShippingInfoDto): Promise<ShippingInfo> => {
    return await prismaClient.shippingInfo.create({
        data: shippingInfoData
    });
};

export const readShippingInfo = async (shippingID: number): Promise<ShippingInfo | null> => {
    return await prismaClient.shippingInfo.findUnique({
        where: { shippingID }
    });
};

export const updateShippingInfo = async (shippingID: number, shippingInfoData: UpdateShippingInfoDto): Promise<ShippingInfo> => {
    return await prismaClient.shippingInfo.update({
        where: { shippingID },
        data: shippingInfoData
    });
};

export const deleteShippingInfo = async (shippingID: number): Promise<void> => {
    await prismaClient.shippingInfo.delete({
        where: { shippingID }
    });
};
