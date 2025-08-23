import React, { useEffect, useState } from 'react'

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}


export default function Ex02() {
    const [posts, setPosts] = useState<Post[]>([]); // Khởi tạo state để lưu trữ danh sách bài viết
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data)) // Xử lý dữ liệu nhận được từ API
            .catch(error => console.error('Error fetching data:', error));
    }, []); // Chạy khi component mount
    // Mảng rỗng [] đảm bảo useEffect chỉ chạy một lần khi component được mount
    return (

        <div className='alert alert-secondary'>
            <h2>Example 02</h2>
            <p>Bài tập 2: Lấy dữ liệu từ API (useEffect)
                Mô tả:
                Tạo một component PostList để lấy dữ liệu từ API
                https://jsonplaceholder.typicode.com/posts khi component mount.
                Hiển thị danh sách các bài viết với tiêu đề và nội dung.           </p>
            <h2>Danh sach bai viet</h2>
            <ul>
                {posts.slice(0, 10).map(post => (
                    <li key={post.id}>
                        {post.title}
                    </li>
                ))}
            </ul>


        </div>
    )
}
