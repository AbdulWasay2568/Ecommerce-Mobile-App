import { Cart } from "@prisma/client";
import prismaClient from "../../prisma/prisma.client";
import { CreateCartDto, UpdateCartDto } from "../interfaces/cart.interface";

export const fetchCarts = async (): Promise<Cart[]> => {
    return await prismaClient.cart.findMany({
        include: {
            Product: {
                select: {
                    name: true,
                    description: true,
                    price: true,
                    image_url: true,
                }
            }
        }
    });
};

export const createCart = async (cartData: CreateCartDto): Promise<Cart> => {
    const existingCartItem = await prismaClient.cart.findUnique({
        where: {
            userID_productID: {
                userID: cartData.userID,
                productID: cartData.productID
            }
        }
    });

    if (existingCartItem) {
        return await prismaClient.cart.update({
            where: { cartID: existingCartItem.cartID },
            data: {
                quantity: existingCartItem.quantity + cartData.quantity,
                total_amount: existingCartItem.total_amount + cartData.total_amount
            }
        });
    } else {
        return await prismaClient.cart.create({
            data: cartData
        });
    }
};

export const readCart = async (cartID: number): Promise<Cart | null> => {
    return await prismaClient.cart.findUnique({
        where: { cartID },
        include: {
            Product: {
                select: {
                    name: true,
                    description: true,
                    price: true,
                    image_url: true,
                }
            }
        }
    });
};

export const updateCart = async (cartID: number, cartData: UpdateCartDto): Promise<Cart> => {
    return await prismaClient.cart.update({
        where: { cartID },
        data: cartData
    });
};

export const deleteCart = async (cartID: number): Promise<void> => {
    await prismaClient.cart.delete({
        where: { cartID }
    });
};

// Fetch carts by user ID
export const fetchCartsByUser = async (userID: number): Promise<Cart[]> => {
    if (typeof userID !== 'number') {
        throw new Error("Invalid userID. Expected a number.");
    }

        try {
          return await prismaClient.cart.findMany({
            where: {
              userID: userID, // Pass userID here
            },
            include: {
              Product: {
                select: {
                  name: true,
                  description: true,
                  price: true,
                  image_url: true
                }
              }
            }
          });
        } catch (error) {
          console.error("Error fetching user's cart:", error);
          throw new Error("Failed to fetch user's cart");
        }
      }