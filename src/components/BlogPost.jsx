import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentList from './CommentList';
import CreateComment from './CreateComment';
import { useDispatch } from 'react-redux';
import { getPostId } from '../Action/blogaction/BlogAction';


const BlogPost = () => {
    const dispatch = useDispatch();

    const { id } = useParams();
    const [post, setPost] = useState(null);
    console.log(post, "in Blogpost.jsx file")


    // for Api use the below code and remove  the above code
    // axios.get(`/api/posts/${match.params.id}`).then(response => {
    //     setPost(response.data);
    // });


    useEffect(() => {
        const fetchPost = async () => {
            const response = await dispatch(getPostId(id));
            setPost(response);
        };
        fetchPost();
    }, [id, dispatch]);

    if (!post) return <div>Loading...</div>;

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <CommentList postId={post.id} />
            <CreateComment postId={post.id} />
        </div>
    );
}

export default BlogPost;