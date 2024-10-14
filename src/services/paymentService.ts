import {apiClient} from './axios';

export const fetchPayments = async () => {
  try {
    const response = await apiClient.get('/payments');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchPaymentById = async (paymentID: number) => {
  try {
    const response = await apiClient.get(`/payments/${paymentID}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPayment = async (data: any) => {
  try {
    const response = await apiClient.post('/payments', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePayment = async (paymentID: number, data: any) => {
  try {
    const response = await apiClient.put(`/payments/${paymentID}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePayment = async (paymentID: number) => {
  try {
    await apiClient.delete(`/payments/${paymentID}`);
  } catch (error) {
    throw error;
  }
};
