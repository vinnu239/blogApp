import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCommentsByPostID } from '../Action/blogaction/BlogAction';


const CommentList = ({ postId }) => {
    const comments = useSelector(state => state.blogs.comments);
    const dispatch = useDispatch();
    // const [comments, setComments] = useState([]);


    useEffect(() => {
        const fetchComments = async () => {
            try {
                dispatch(getAllCommentsByPostID(postId));

            } catch (error) {
                console.error('Error fetching data', error);

            }
        };
        fetchComments();

    }, [postId,dispatch])

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