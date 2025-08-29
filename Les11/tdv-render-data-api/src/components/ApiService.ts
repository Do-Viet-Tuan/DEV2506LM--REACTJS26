import axios from 'axios';
import { Student, Category, Product, Account, Order, WeatherForecast } from '../types';

const API_BASE_URL = 'http://apixm.devmaster.vn/api';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export class ApiService {
  // Generic method to fetch data from any endpoint
  static async fetchData<T>(endpoint: string): Promise<T[]> {
    try {
      const response = await apiClient.get<T[]>(`/${endpoint}`);
      return response.data;
    } catch (error: any) {
      throw new Error(`Failed to fetch ${endpoint}: ${error.response?.data?.message || error.message}`);
    }
  }

  // Specific methods for different endpoints with proper typing
  static async getStudents(): Promise<Student[]> {
    return this.fetchData<Student>('Students');
  }

  static async getCategories(): Promise<Category[]> {
    return this.fetchData<Category>('Categories');
  }

  static async getProducts(): Promise<Product[]> {
    return this.fetchData<Product>('Products');
  }

  static async getAccounts(): Promise<Account[]> {
    return this.fetchData<Account>('Accounts');
  }

  static async getOrders(): Promise<Order[]> {
    return this.fetchData<Order>('Orders');
  }

  static async getWeatherForecast(): Promise<WeatherForecast[]> {
    return this.fetchData<WeatherForecast>('WeatherForecast');
  }

  // Method to get a specific item by ID
  static async getById<T>(endpoint: string, id: number): Promise<T> {
    try {
      const response = await apiClient.get<T>(`/${endpoint}/${id}`);
      return response.data;
    } catch (error: any) {
      throw new Error(`Failed to fetch ${endpoint} with ID ${id}: ${error.response?.data?.message || error.message}`);
    }
  }

  // Method to test API connectivity
  static async testConnection(): Promise<boolean> {
    try {
      await apiClient.get('/Students');
      return true;
    } catch (error) {
      return false;
    }
  }
}

export default ApiService;
