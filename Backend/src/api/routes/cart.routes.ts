import { Router } from "express";
import {
    fetchCartsController,
    createCartController,
    readCartController,
    updateCartController,
    deleteCartController,
    fetchCartByUserController
} from "../controllers/cart.controller";

const cartRoutes: Router = Router();

cartRoutes.get('/', fetchCartsController);
cartRoutes.post('/', createCartController);
cartRoutes.get('/:id', readCartController);
cartRoutes.put('/:id', updateCartController);
cartRoutes.delete('/:id', deleteCartController);
// cartRoutes.get('/users/:id',fetchCartByUserController);
cartRoutes.get('/user/:userID', fetchCartByUserController);

// cartRoutes.get('/',fetchCartByUserController);
export default cartRoutes;
