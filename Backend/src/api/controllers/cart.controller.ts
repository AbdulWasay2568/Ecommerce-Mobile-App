import { Request, Response } from "express";
import { fetchCarts, createCart, readCart, updateCart, deleteCart, fetchCartsByUser } from "../services/cart.service";
import { CreateCartDto, UpdateCartDto } from "../interfaces/cart.interface";

export const fetchCartsController = async (req: Request, res: Response): Promise<void> => {
    try {
        const carts = await fetchCarts();
        res.status(200).json(carts);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch carts" });
    }
};

export const createCartController = async (req: Request, res: Response): Promise<void> => {
    try {
        const cartData: CreateCartDto = req.body;
        const newCart = await createCart(cartData);
        res.status(201).json(newCart);
    } catch (error) {
        res.status(500).json({ error: "Failed to create cart" });
    }
};

export const readCartController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const cart = await readCart(Number(id));
        if (cart) {
            res.status(200).json(cart);
        } else {
            res.status(404).json({ error: "Cart not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch cart" });
    }
};

export const updateCartController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const cartData: UpdateCartDto = req.body;
        const updatedCart = await updateCart(Number(id), cartData);
        res.status(200).json(updatedCart);
    } catch (error) {
        res.status(500).json({ error: "Failed to update cart" });
    }
};

export const deleteCartController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        await deleteCart(Number(id));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Failed to delete cart" });
    }
};


export const fetchCartByUserController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userID } = req.params;
        console.log("Fetching cart for User ID:", userID);

        if (!userID) {
            res.status(400).json({ error: "User ID is required" });
            return;
        }

        const userCart = await fetchCartsByUser(Number(userID));
        console.log("Fetched User Cart:", userCart);

        if (userCart.length > 0) {
            res.status(200).json(userCart);
        } else {
            res.status(404).json({ error: "Cart is empty" });
        }
    } catch (error) {
        console.error("Error in fetching user's cart:", error);

        if (error instanceof Error) {
            res.status(500).json({ error: "Failed to fetch user's cart", details: error.message });
        } else {
            res.status(500).json({ error: "Failed to fetch user's cart" });
        }
    }
};


