import { Router } from "express";
import {
    fetchProductsController,
    createProductController,
    readProductController,
    updateProductController,
    deleteProductController
} from "../controllers/product.controller";

const productRoutes: Router = Router();

productRoutes.get('/', fetchProductsController);
productRoutes.post('/', createProductController);
productRoutes.get('/:id', readProductController);
productRoutes.put('/:id', updateProductController);
productRoutes.delete('/:id', deleteProductController);

export default productRoutes;
