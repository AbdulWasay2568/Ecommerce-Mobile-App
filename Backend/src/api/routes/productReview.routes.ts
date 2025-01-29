import { Router } from "express";
import {
    fetchProductReviewsController,
    createProductReviewController,
    readProductReviewController,
    updateProductReviewController,
    deleteProductReviewController,
} from "../controllers/productReview.controller";

const productReviewRoutes: Router = Router();

productReviewRoutes.get('/', fetchProductReviewsController);
productReviewRoutes.post('/', createProductReviewController);
productReviewRoutes.get('/:id', readProductReviewController);
productReviewRoutes.put('/:id', updateProductReviewController);
productReviewRoutes.delete('/:id', deleteProductReviewController);

export default productReviewRoutes;
