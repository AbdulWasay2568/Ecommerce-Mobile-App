import {apiClient} from './axios';

export const fetchCategories = async () => {
  try {
    const response = await apiClient.get('/categories');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchCategoryById = async (categoryID: number) => {
  try {
    const response = await apiClient.get(`/categories/${categoryID}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createCategory = async (data: any) => {
  try {
    const response = await apiClient.post('/categories', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateCategory = async (categoryID: number, data: any) => {
  try {
    const response = await apiClient.put(`/categories/${categoryID}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCategory = async (categoryID: number) => {
  try {
    await apiClient.delete(`/categories/${categoryID}`);
  } catch (error) {
    throw error;
  }
};
