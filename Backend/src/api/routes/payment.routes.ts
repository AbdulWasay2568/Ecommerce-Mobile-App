import { Router } from "express";
import {
    fetchPaymentsController,
    createPaymentController,
    readPaymentController,
    updatePaymentController,
    deletePaymentController
} from "../controllers/payment.controller";

const paymentRoutes: Router = Router();

paymentRoutes.get('/', fetchPaymentsController);
paymentRoutes.post('/', createPaymentController);
paymentRoutes.get('/:id', readPaymentController);
paymentRoutes.put('/:id', updatePaymentController);
paymentRoutes.delete('/:id', deletePaymentController);

export default paymentRoutes;
