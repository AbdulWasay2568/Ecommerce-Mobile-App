import { Request, Response } from "express";
import { fetchShippingInfos, createShippingInfo, readShippingInfo, updateShippingInfo, deleteShippingInfo } from "../services/shippingInfo.service";
import { CreateShippingInfoDto, UpdateShippingInfoDto } from "../interfaces/shippingInfo.interface";

export const fetchShippingInfosController = async (req: Request, res: Response): Promise<void> => {
    try {
        const shippingInfos = await fetchShippingInfos();
        res.status(200).json(shippingInfos);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch shipping info" });
    }
};

export const createShippingInfoController = async (req: Request, res: Response): Promise<void> => {
    try {
        const shippingInfoData: CreateShippingInfoDto = req.body;
        const newShippingInfo = await createShippingInfo(shippingInfoData);
        res.status(201).json(newShippingInfo);
    } catch (error) {
        res.status(500).json({ error: "Failed to create shipping info" });
    }
};

export const readShippingInfoController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const shippingInfo = await readShippingInfo(Number(id));
        if (shippingInfo) {
            res.status(200).json(shippingInfo);
        } else {
            res.status(404).json({ error: "Shipping info not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch shipping info" });
    }
};

export const updateShippingInfoController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const shippingInfoData: UpdateShippingInfoDto = req.body;
        const updatedShippingInfo = await updateShippingInfo(Number(id), shippingInfoData);
        res.status(200).json(updatedShippingInfo);
    } catch (error) {
        res.status(500).json({ error: "Failed to update shipping info" });
    }
};

export const deleteShippingInfoController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        await deleteShippingInfo(Number(id));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Failed to delete shipping info" });
    }
};
