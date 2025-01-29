import { Router } from "express";
import {
    fetchOrdersController,
    createOrderController,
    readOrderController,
    updateOrderController,
    deleteOrderController
} from "../controllers/order.controller";

const orderRoutes: Router = Router();

orderRoutes.get('/', fetchOrdersController);
orderRoutes.post('/', createOrderController);
orderRoutes.get('/:id', readOrderController);
orderRoutes.put('/:id', updateOrderController);
orderRoutes.delete('/:id', deleteOrderController);

export default orderRoutes;
