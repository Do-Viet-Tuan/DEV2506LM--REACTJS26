import { Student, Category, Product, Account, Order, WeatherForecast } from '../types';

// Mock data for demonstration when API is not available
export const mockStudents: Student[] = [
  {
    studentId: 1,
    studentName: "Nguyễn Văn An",
    email: "nguyenvanan@email.com",
    phone: "0123456789",
    address: "123 Đường ABC, Quận 1, TP.HCM",
    dateOfBirth: "2000-01-15"
  },
  {
    studentId: 2,
    studentName: "Trần Thị Bình",
    email: "tranbinh@email.com",
    phone: "0987654321",
    address: "456 Đường XYZ, Quận 2, TP.HCM",
    dateOfBirth: "1999-05-20"
  },
  {
    studentId: 3,
    studentName: "Lê Minh Cường",
    email: "leminhcuong@email.com",
    phone: "0369852147",
    address: "789 Đường DEF, Quận 3, TP.HCM",
    dateOfBirth: "2001-12-10"
  }
];

export const mockCategories: Category[] = [
  {
    categoryId: 1,
    categoryName: "Điện tử",
    description: "Các sản phẩm điện tử như điện thoại, laptop, máy tính bảng"
  },
  {
    categoryId: 2,
    categoryName: "Thời trang",
    description: "Quần áo, giày dép, phụ kiện thời trang"
  },
  {
    categoryId: 3,
    categoryName: "Gia dụng",
    description: "Đồ gia dụng, nội thất, thiết bị nhà bếp"
  }
];

export const mockProducts: Product[] = [
  {
    productId: 1,
    productName: "iPhone 15 Pro",
    description: "Điện thoại thông minh cao cấp từ Apple",
    price: 29990000,
    categoryId: 1
  },
  {
    productId: 2,
    productName: "Samsung Galaxy S24",
    description: "Điện thoại Android flagship từ Samsung",
    price: 22990000,
    categoryId: 1
  },
  {
    productId: 3,
    productName: "Áo polo nam",
    description: "Áo polo nam chất liệu cotton cao cấp",
    price: 299000,
    categoryId: 2
  }
];

export const mockAccounts: Account[] = [
  {
    accountId: 1,
    accountName: "Admin User",
    email: "admin@devmaster.vn",
    phone: "0123456789",
    avatar: "https://via.placeholder.com/40",
    password: "hashed_password",
    salt: "random_salt",
    isActive: true,
    roleId: 1
  },
  {
    accountId: 2,
    accountName: "Regular User",
    email: "user@devmaster.vn",
    phone: "0987654321",
    avatar: "https://via.placeholder.com/40",
    password: "hashed_password",
    salt: "random_salt",
    isActive: true,
    roleId: 2
  }
];

export const mockOrders: Order[] = [
  {
    orderId: 1,
    orderDate: "2024-01-15",
    requiredDate: "2024-01-20",
    shippedDate: "2024-01-18",
    freight: 50000,
    shipName: "Nguyễn Văn An",
    shipAddress: "123 Đường ABC, Quận 1, TP.HCM",
    customerId: 1
  },
  {
    orderId: 2,
    orderDate: "2024-01-16",
    requiredDate: "2024-01-21",
    shippedDate: "",
    freight: 30000,
    shipName: "Trần Thị Bình",
    shipAddress: "456 Đường XYZ, Quận 2, TP.HCM",
    customerId: 2
  }
];

export const mockWeather: WeatherForecast[] = [
  {
    date: "2024-01-15",
    temperatureC: 28,
    temperatureF: 82,
    summary: "Sunny"
  },
  {
    date: "2024-01-16",
    temperatureC: 26,
    temperatureF: 79,
    summary: "Partly Cloudy"
  },
  {
    date: "2024-01-17",
    temperatureC: 24,
    temperatureF: 75,
    summary: "Rainy"
  }
];
