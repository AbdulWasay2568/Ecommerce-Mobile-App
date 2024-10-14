import {apiClient} from './axios';

export const fetchOrders = async () => {
  try {
    const response = await apiClient.get('/orders');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchOrderById = async (orderID: number) => {
  try {
    const response = await apiClient.get(`/orders/${orderID}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createOrder = async (data: any) => {
  try {
    const response = await apiClient.post('/orders', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateOrder = async (orderID: number, data: any) => {
  try {
    const response = await apiClient.put(`/orders/${orderID}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteOrder = async (orderID: number) => {
  try {
    await apiClient.delete(`/orders/${orderID}`);
  } catch (error) {
    throw error;
  }
};
