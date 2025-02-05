import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import axios from 'axios';
import { createComment, getAllCommentsByPostID } from '../Action/blogaction/BlogAction';

const CreateComment = ({ postId }) => {

    const dispatch = useDispatch();
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Comment created:', { postId, content });
        await dispatch(createComment({ postId, content }));
        await dispatch(getAllCommentsByPostID(postId));
        setContent('');
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