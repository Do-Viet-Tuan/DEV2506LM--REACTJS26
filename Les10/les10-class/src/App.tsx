import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from './API/api-local';
import { get } from 'jquery';
import CreateProduct from './components/CreateProduct';
import UpdateProduct from './components/UpdateProduct';

function App() {
  const [products, setProducts] = useState([{
    "id": "0",
    "cid": "",
    "name": "",
    "price": "",
    "status": ""
  }]);

  const getProducts = async () => {
    let res = await axios.get('products');
    setProducts(res.data);
  };
  const [productUpdate, setProductUpdate] = useState({
    "id": "0",
    "cid": "",
    "name": "",
    "price": "",
    "status": ""
  });
  useEffect(() => {
    getProducts();
  }, []);
//
  const handleDelete = async (id: any) => {
    console.log("Deleted product with ID:", id);
    await axios.delete("products/" + id);
    console.log("Deleted product with ID:", id);
    getProducts();
  }

  const handleCreate = async () => {
    await getProducts();
  };

const handleViewUpdate = async (id: any) => {
  let res = await axios.get(`products/${id}`);
  setProductUpdate(res.data);
};

  return (
  
    <div className="App">
      <div id='product-list'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>CID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.cid}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.status}</td>
                <td>
                  <button className='btn btn-primary'>Create</button>
                  <button className='btn btn-warning' onClick={() => handleViewUpdate(product.id)}>Update</button>
                  <button className='btn btn-danger' onClick={() => handleDelete(product.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CreateProduct handleCreate={getProducts} />
      <UpdateProduct product={productUpdate} handleUpdate={getProducts} />
    </div>
  );
}

export default App;
