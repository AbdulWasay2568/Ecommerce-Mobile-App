import {apiClient} from './axios';

export const fetchShippingInfo = async () => {
  try {
    const response = await apiClient.get('/shipping');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchShippingInfoById = async (shippingID: number) => {
  try {
    const response = await apiClient.get(`/shipping/${shippingID}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createShippingInfo = async (data: any) => {
  try {
    const response = await apiClient.post('/shipping', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateShippingInfo = async (shippingID: number, data: any) => {
  try {
    const response = await apiClient.put(`/shipping/${shippingID}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteShippingInfo = async (shippingID: number) => {
  try {
    await apiClient.delete(`/shipping/${shippingID}`);
  } catch (error) {
    throw error;
  }
};
