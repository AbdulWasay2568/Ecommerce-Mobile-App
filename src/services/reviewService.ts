import {apiClient} from './axios';

export const fetchProductReviews = async (productID: number) => {
  try {
    const response = await apiClient.get(`/reviews?productID=${productID}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createProductReview = async (data: any) => {
  try {
    const response = await apiClient.post('/reviews', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProductReview = async (reviewID: number, data: any) => {
  try {
    const response = await apiClient.put(`/reviews/${reviewID}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProductReview = async (reviewID: number) => {
  try {
    await apiClient.delete(`/reviews/${reviewID}`);
  } catch (error) {
    throw error;
  }
};
