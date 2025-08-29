import React, { useState, useEffect } from 'react';
import './App.css';
import { ApiService } from './components/ApiService';
import DataCard from './components/DataCard';
import { Student, Category, Product, Account, Order, WeatherForecast } from './types';

function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [weather, setWeather] = useState<WeatherForecast[]>([]);
  
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('students');
  const [connectionStatus, setConnectionStatus] = useState<boolean | null>(null);

  // Test API connection on mount
  useEffect(() => {
    const testConnection = async () => {
      try {
        const isConnected = await ApiService.testConnection();
        setConnectionStatus(isConnected);
      } catch (err) {
        setConnectionStatus(false);
      }
    };
    testConnection();
  }, []);

  // Fetch data functions
  const fetchStudents = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await ApiService.getStudents();
      setStudents(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await ApiService.getCategories();
      setCategories(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchProducts = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await ApiService.getProducts();
      setProducts(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchAccounts = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await ApiService.getAccounts();
      setAccounts(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchOrders = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await ApiService.getOrders();
      setOrders(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchWeather = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await ApiService.getWeatherForecast();
      setWeather(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Load data based on active tab
  useEffect(() => {
    if (connectionStatus === false) return; // Don't fetch if connection failed
    
    switch (activeTab) {
      case 'students':
        fetchStudents();
        break;
      case 'categories':
        fetchCategories();
        break;
      case 'products':
        fetchProducts();
        break;
      case 'accounts':
        fetchAccounts();
        break;
      case 'orders':
        fetchOrders();
        break;
      case 'weather':
        fetchWeather();
        break;
      default:
        break;
    }
  }, [activeTab, connectionStatus]);

  const tabs = [
    { key: 'students', label: 'Students', data: students },
    { key: 'categories', label: 'Categories', data: categories },
    { key: 'products', label: 'Products', data: products },
    { key: 'accounts', label: 'Accounts', data: accounts },
    { key: 'orders', label: 'Orders', data: orders },
    { key: 'weather', label: 'Weather', data: weather },
  ];

  const getCurrentData = () => {
    switch (activeTab) {
      case 'students': return students;
      case 'categories': return categories;
      case 'products': return products;
      case 'accounts': return accounts;
      case 'orders': return orders;
      case 'weather': return weather;
      default: return [];
    }
  };

  const getDataType = (): 'student' | 'category' | 'product' | 'account' | 'order' | 'weather' => {
    switch (activeTab) {
      case 'students': return 'student';
      case 'categories': return 'category';
      case 'products': return 'product';
      case 'accounts': return 'account';
      case 'orders': return 'order';
      case 'weather': return 'weather';
      default: return 'student';
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>🌐 API Data Renderer</h1>
        <p>Hiển thị dữ liệu từ API Devmaster</p>
        
        {connectionStatus !== null && (
          <div className={`connection-status ${connectionStatus ? 'connected' : 'disconnected'}`}>
            <span className="status-indicator"></span>
            {connectionStatus ? 'Kết nối API thành công' : 'Không thể kết nối đến API'}
          </div>
        )}
      </header>

      <nav className="nav-tabs">
        {tabs.map((tab) => (
          <button 
            key={tab.key}
            className={activeTab === tab.key ? 'active' : ''} 
            onClick={() => setActiveTab(tab.key)}
            disabled={connectionStatus === false}
          >
            {tab.label}
            {tab.data.length > 0 && (
              <span className="badge">{tab.data.length}</span>
            )}
          </button>
        ))}
      </nav>

      <main className="main-content">
        {connectionStatus === false && (
          <div className="error">
            ❌ Không thể kết nối đến API. Vui lòng kiểm tra:
            <ul style={{textAlign: 'left', marginTop: '1rem'}}>
              <li>Kết nối mạng internet</li>
              <li>API server đang hoạt động</li>
              <li>CORS settings cho phép truy cập từ localhost</li>
            </ul>
          </div>
        )}

        {connectionStatus !== false && loading && (
          <div className="loading">⏳ Đang tải dữ liệu...</div>
        )}
        
        {connectionStatus !== false && error && (
          <div className="error">❌ {error}</div>
        )}

        {connectionStatus !== false && !loading && !error && (
          <div className="data-section">
            <h2>
              📊 Danh sách {tabs.find(tab => tab.key === activeTab)?.label} 
              ({getCurrentData().length})
            </h2>
            
            {getCurrentData().length > 0 ? (
              <div className="data-grid">
                {getCurrentData().map((item: any, index: number) => (
                  <DataCard 
                    key={item.id || item.studentId || item.categoryId || item.productId || item.accountId || item.orderId || index}
                    data={item}
                    type={getDataType()}
                  />
                ))}
              </div>
            ) : (
              <div className="no-data">
                📝 Không có dữ liệu {tabs.find(tab => tab.key === activeTab)?.label}
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>
          🔗 API Source: <a href="http://apixm.devmaster.vn/swagger/index.html" target="_blank" rel="noopener noreferrer">
            Devmaster API Documentation
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
