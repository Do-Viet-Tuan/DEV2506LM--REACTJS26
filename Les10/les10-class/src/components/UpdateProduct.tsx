import React, { FormEvent, useEffect, useState } from 'react'
import axios from '../API/api-local';

export default function UpdateProduct({ product, handleUpdate }: { product: any, handleUpdate: () => void }) {
    const [id, setId] = useState("");
    const [cid, setCid] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [status, setStatus] = useState("");

    // Update state when product prop changes
    useEffect(() => {
        setId(product.id);
        setCid(product.cid);
        setName(product.name);
        setPrice(product.price);
        setStatus(product.status);
    }, [product]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log("Product updated:", { id, cid, name, price, status });
        let product = {
            id: id,
            cid: cid,
            name: name,
            price: price,
            status: status
        };
        await axios.put("products/" + id, product);
        // Gọi hàm handleUpdate để làm mới danh sách sản phẩm
        handleUpdate();
        setId("");
        setCid("");
        setName("");
        setPrice("");
        setStatus("");
        console.log("Product updated successfully:", product);
    };

    return (
        <div>
            <h2>Update Product</h2>
            <form action="" className='form-update' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">ID:</label>
                    <input type="text" id="id" name="id" value={id} onChange={(e) => setId(e.target.value)} readOnly />
                </div>
                <div>
                    <label htmlFor="cid">CID:</label>
                    <input type="text" id="cid" name="cid" value={cid} onChange={(e) => setCid(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="status">Status:</label>
                    <input type="radio" id="status-available" name="status" value={"Available"} checked={status === "Available"} onChange={(e) => setStatus(e.target.value)} />
                    <label htmlFor="status-available">Available</label>
                    <input type="radio" id="status-out_of_stock" name="status" value={"Out of Stock"} checked={status === "Out of Stock"} onChange={(e) => setStatus(e.target.value)} />
                    <label htmlFor="status-out_of_stock">Out of Stock</label>
                </div>
                <input type="submit" name='submit' id='update-product' value="Update Product" />
            </form>
        </div>
    );
}
