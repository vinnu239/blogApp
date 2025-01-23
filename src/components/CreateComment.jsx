import React, { useState } from 'react';
import axios from 'axios';

const CreateComment = ({ postId }) => {
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Comment created:', { postId, content });
        // axios.post(`/api/posts/${postId}/comments`, { content }).then(response => {
        //     console.log('Comment created:', response.data);
        // });
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Comment"
            />
            <button type="submit">Add Comment</button>
        </form>
    );
}

export default CreateComment;