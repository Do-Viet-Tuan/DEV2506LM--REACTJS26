import React, { ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom';

export default function Search() {
    const products = ['phone', 'tablet', 'laptop'];
    const [searchParams, setSearchParams] = useSearchParams('');
    const search = searchParams.get('name') || '';

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.value;
        if (name) {
            setSearchParams({ name });
        } else {
            setSearchParams({});
        }
    }
  return (
    <div>
        <div className='wrap'>
            <div className='search'>
                <input type="text" className='searchTerm' value={search} onChange={handleSearch} placeholder='Tìm kiếm sản phẩm...' />
            </div>
            <ul>
                {products.filter(product => product.toLowerCase().includes(search.toLowerCase())).map((product, index) => (
                    <li key={index}>{product}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}
