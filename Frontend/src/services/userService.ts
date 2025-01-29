import {apiClient} from './axios';

interface SignupData {
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const signupUser = async (data: SignupData) => {
  try {
    const response = await apiClient.post('/users', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (data: LoginData) => {
  try {
    const response = await apiClient.post('/login', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchUser = async (userID: number) => {
  try {
    const response = await apiClient.get(`/users/${userID}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (userID: number, data: Partial<SignupData>) => {
  try {
    const response = await apiClient.put(`/users/${userID}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (userID: number) => {
  try {
    await apiClient.delete(`/users/${userID}`);
  } catch (error) {
    throw error;
  }
};
