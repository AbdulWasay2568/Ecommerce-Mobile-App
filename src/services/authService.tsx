import { apiClient } from './axios';
import { RegisterUserDto, LoginUserDto } from '../interfaces/auth.interface'; 

// Type guard to check if error is an AxiosError
function isAxiosError(error: unknown): error is { response: { data: { message: string } } } {
  return (
    typeof error === 'object' &&
    error !== null &&
    'response' in error &&
    typeof (error as any).response?.data?.message === 'string'
  );
}

// Inside your service
export const registerUser = async (data: RegisterUserDto) => {
  try {
    const response = await apiClient.post('/auth/register', JSON.stringify(data));
    return response.data; 
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      console.error('Error during registration:', error.response.data.message);
      throw new Error(error.response.data.message);
    } else {
      console.error('Unexpected error:', error);
      throw new Error('An unexpected error occurred during registration.');
    }
  }
};

// Function to log in a user
export const loginUser = async (data: LoginUserDto) => {
  try {
    const response = await apiClient.post('/auth/login', data);
    
    // Log the entire response for debugging
    console.log("Login API response:", response.data);
    
    // Extract token and log it
    const { token } = response.data; // Adjust based on your API response structure
    console.log("Received Token:", token);

    // Check if the token is valid
    if (!token || typeof token !== 'string') {
      throw new Error('Invalid token received from API.');
    }
    
    return response.data; // Contains the token
  } catch (error) {
    // Handle errors here
    if (isAxiosError(error)) {
      console.error('Login error:', error.response.data.message);
      throw new Error(error.response.data.message);
    } else {
      console.error('Unexpected error during login:', error);
      throw new Error('An unexpected error occurred during login.');
    }
  }
};

// Function to fetch user profile or data if needed
export const fetchUserProfile = async (userID: number) => {
  try {
    const response = await apiClient.get(`/users/${userID}`);
    return response.data; 
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error; 
  }
};
