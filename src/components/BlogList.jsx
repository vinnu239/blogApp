import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pagination from './ReusableComp/Pagination';
import usePagination from './customHook/usePagnation';

const mockPosts = [
    { id: 1, title: 'First List Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second List Post', content: 'This is the content of the second post.' },
];

const BlogList = () => {
    const [posts] = useState(mockPosts);
    const itemsPerPage = 1;
    const { currentPage, currentItems, handlePageChange, totalPages } = usePagination(mockPosts, itemsPerPage);

    // below code uis useful for api
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     axios.get('/api/posts').then(response => {
    //         setPosts(response.data);
    //     });
    // }, []);

    return (
        <div>
            {currentItems.map(post => (
                <div key={post.id}>
                    <h2><Link to={`/posts/${post.id}`}>{post.title}</Link></h2>
                    <p>{post.content}</p>
                </div>
            ))}
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default BlogList;