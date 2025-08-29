// Define interfaces for all possible data types from the API

export interface Student {
  studentId: number;
  studentName: string;
  email: string;
  phone: string;
  address: string;
  dateOfBirth: string;
}

export interface Category {
  categoryId: number;
  categoryName: string;
  description: string;
}

export interface Product {
  productId: number;
  productName: string;
  description: string;
  price: number;
  categoryId: number;
  category?: Category;
}

export interface Account {
  accountId: number;
  accountName: string;
  email: string;
  phone: string;
  avatar: string;
  password: string;
  salt: string;
  isActive: boolean;
  roleId: number;
}

export interface Order {
  orderId: number;
  orderDate: string;
  requiredDate: string;
  shippedDate: string;
  freight: number;
  shipName: string;
  shipAddress: string;
  customerId: number;
}

export interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

// Generic API Response type
export interface ApiResponse<T> {
  data: T[];
  success: boolean;
  message: string;
  totalCount?: number;
}
