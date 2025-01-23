import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // axios.post('/api/posts', { title, content }).then(response => {
        //     console.log('Post created:', response.data);
        // });
        console.log('Post created:', { title, content });
        // Add the new post to mock data or send it to the backend
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