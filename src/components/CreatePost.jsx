import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import {createBlogPosts,getAllBlogPosts } from '../Action/Api/Blogapi';
import { createBlogPost, getAllPosts } from '../Action/blogaction/BlogAction';

const CreatePost = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = Date.now();
        dispatch(createBlogPost({ id, title, content }));
        dispatch(getAllPosts());
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Content"
            />
            <button type="submit">Create Post</button>
        </form>
    );
}

export default CreatePost;