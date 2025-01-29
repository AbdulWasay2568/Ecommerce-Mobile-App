import {apiClient} from './axios';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity?: number;
}

interface CreateProductData {
  name: string;
  image: string;
  price: number;
  quantity?: number;
}

interface UpdateProductData {
  name?: string;
  image?: string;
  price?: number;
  quantity?: number;
}

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await apiClient.get<Product[]>('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductById = async (productID: number): Promise<Product> => {
  try {
    const response = await apiClient.get<Product>(`/products/${productID}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${productID}:`, error);
    throw error;
  }
};

export const createProduct = async (data: CreateProductData): Promise<Product> => {
  try {
    const response = await apiClient.post<Product>('/products', data);
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

export const updateProduct = async (productID: number, data: UpdateProductData): Promise<Product> => {
  try {
    const response = await apiClient.put<Product>(`/products/${productID}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error updating product with ID ${productID}:`, error);
    throw error;
  }
};

export const deleteProduct = async (productID: number): Promise<void> => {
  try {
    await apiClient.delete(`/products/${productID}`);
  } catch (error) {
    console.error(`Error deleting product with ID ${productID}:`, error);
    throw error;
  }
};
