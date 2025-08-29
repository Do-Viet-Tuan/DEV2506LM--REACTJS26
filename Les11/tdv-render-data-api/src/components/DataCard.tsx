import React from 'react';
import { Student, Category, Product, Account, Order, WeatherForecast } from '../types';

interface DataCardProps {
  data: Student | Category | Product | Account | Order | WeatherForecast;
  type: 'student' | 'category' | 'product' | 'account' | 'order' | 'weather';
}

const DataCard: React.FC<DataCardProps> = ({ data, type }) => {
  const renderStudentCard = (student: Student) => (
    <div className="data-card">
      <h3>{student.studentName}</h3>
      <p><strong>ID:</strong> {student.studentId}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Phone:</strong> {student.phone}</p>
      <p><strong>Address:</strong> {student.address}</p>
      <p><strong>Date of Birth:</strong> {new Date(student.dateOfBirth).toLocaleDateString('vi-VN')}</p>
    </div>
  );

  const renderCategoryCard = (category: Category) => (
    <div className="data-card">
      <h3>{category.categoryName}</h3>
      <p><strong>ID:</strong> {category.categoryId}</p>
      <p><strong>Description:</strong> {category.description}</p>
    </div>
  );

  const renderProductCard = (product: Product) => (
    <div className="data-card">
      <h3>{product.productName}</h3>
      <p><strong>ID:</strong> {product.productId}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> {product.price.toLocaleString('vi-VN')} VNĐ</p>
      <p><strong>Category ID:</strong> {product.categoryId}</p>
    </div>
  );

  const renderAccountCard = (account: Account) => (
    <div className="data-card">
      <h3>{account.accountName}</h3>
      <p><strong>ID:</strong> {account.accountId}</p>
      <p><strong>Email:</strong> {account.email}</p>
      <p><strong>Phone:</strong> {account.phone}</p>
      <p><strong>Status:</strong> {account.isActive ? 'Active' : 'Inactive'}</p>
      <p><strong>Role ID:</strong> {account.roleId}</p>
      {account.avatar && (
        <p><strong>Avatar:</strong> 
          <img src={account.avatar} alt="Avatar" style={{width: '40px', height: '40px', borderRadius: '50%', marginLeft: '8px'}} />
        </p>
      )}
    </div>
  );

  const renderOrderCard = (order: Order) => (
    <div className="data-card">
      <h3>Order #{order.orderId}</h3>
      <p><strong>Order Date:</strong> {new Date(order.orderDate).toLocaleDateString('vi-VN')}</p>
      <p><strong>Required Date:</strong> {new Date(order.requiredDate).toLocaleDateString('vi-VN')}</p>
      {order.shippedDate && (
        <p><strong>Shipped Date:</strong> {new Date(order.shippedDate).toLocaleDateString('vi-VN')}</p>
      )}
      <p><strong>Freight:</strong> {order.freight.toLocaleString('vi-VN')} VNĐ</p>
      <p><strong>Ship Name:</strong> {order.shipName}</p>
      <p><strong>Ship Address:</strong> {order.shipAddress}</p>
      <p><strong>Customer ID:</strong> {order.customerId}</p>
    </div>
  );

  const renderWeatherCard = (weather: WeatherForecast) => (
    <div className="data-card">
      <h3>{weather.summary}</h3>
      <p><strong>Date:</strong> {new Date(weather.date).toLocaleDateString('vi-VN')}</p>
      <p><strong>Temperature (°C):</strong> {weather.temperatureC}°</p>
      <p><strong>Temperature (°F):</strong> {weather.temperatureF}°</p>
    </div>
  );

  switch (type) {
    case 'student':
      return renderStudentCard(data as Student);
    case 'category':
      return renderCategoryCard(data as Category);
    case 'product':
      return renderProductCard(data as Product);
    case 'account':
      return renderAccountCard(data as Account);
    case 'order':
      return renderOrderCard(data as Order);
    case 'weather':
      return renderWeatherCard(data as WeatherForecast);
    default:
      return <div className="data-card">Unknown data type</div>;
  }
};

export default DataCard;
