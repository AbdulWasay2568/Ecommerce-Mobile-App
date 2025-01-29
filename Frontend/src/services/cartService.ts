import { apiClient } from './axios';
import { CreateCartDto, UpdateCartDto } from '../interfaces/cart.interface'; 

export const fetchCartItems = async (userID: number) => {
  try {
    const response = await apiClient.get(`/carts?userID=${userID}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addToCart = async (data: CreateCartDto) => {
  try {
    const response = await apiClient.post('/cart', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateCartItem = async (cartID: number, data: UpdateCartDto) => {
  try {
    const response = await apiClient.put(`/cart/${cartID}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const removeCartItem = async (cartID: number) => {
  try {
    await apiClient.delete(`/cart/${cartID}`);
  } catch (error) {
    throw error;
  }
};

// Fetching cart by user ID
export const fetchCartByUser = async (userID: number) => {
  try {
    const response = await apiClient.get(`/carts/user/${userID}`); 
    return response.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};

