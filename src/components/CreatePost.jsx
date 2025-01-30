import React, { useState } from 'react';
import {createBlogPosts } from '../Action/Api/Blogapi';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = Date.now();
        createBlogPosts({id,title,content});
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