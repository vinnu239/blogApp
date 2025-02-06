import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from './ReusableComp/Pagination';
import usePagination from './customHook/usePagnation';
import { getAllPosts } from '../Action/blogaction/BlogAction';

// const mockPosts = [
//     { id: 1, title: 'First List Post', content: 'This is the content of the first post.' },
//     { id: 2, title: 'Second List Post', content: 'This is the content of the second post.' },
// ];

const BlogList = () => {
    const posts = useSelector(state => state.blogs.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            try {
                dispatch(getAllPosts());

            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    },[dispatch]);
    const itemsPerPage = 1;
    const { currentPage, currentItems, handlePageChange, totalPages } = usePagination(posts, itemsPerPage);
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