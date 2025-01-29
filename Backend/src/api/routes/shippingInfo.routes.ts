import { Router } from "express";
import {
    fetchShippingInfosController,
    createShippingInfoController,
    readShippingInfoController,
    updateShippingInfoController,
    deleteShippingInfoController
} from "../controllers/shippingInfo.controller";

const shippingInfoRoutes: Router = Router();

shippingInfoRoutes.get('/', fetchShippingInfosController);
shippingInfoRoutes.post('/', createShippingInfoController);
shippingInfoRoutes.get('/:id', readShippingInfoController);
shippingInfoRoutes.put('/:id', updateShippingInfoController);
shippingInfoRoutes.delete('/:id', deleteShippingInfoController);

export default shippingInfoRoutes;
