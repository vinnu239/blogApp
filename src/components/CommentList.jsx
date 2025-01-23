import React, { useEffect, useState } from 'react';
import axios from 'axios';

const mockComments = {
    1: [{ id: 1, content: 'First comment on first post' }],
    2: [{ id: 2, content: 'First comment on second post' }],
};

const CommentList = ({ postId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        setComments(mockComments[postId] || []);
    }, [postId]);

    // useEffect(() => {
    //     axios.get(`/api/posts/${postId}/comments`).then(response => {
    //         setComments(response.data);
    //     });
    // }, [postId]);

    return (
        <div>
            <h3>Comments are shown here</h3>
            {comments.map(comment => (
                <div key={comment.id}>
                    <p>{comment.content}</p>
                </div>
            ))}
        </div>
    );
}

export default CommentList;