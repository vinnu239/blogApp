import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CommentList from './CommentList';
import CreateComment from './CreateComment';

const mockPosts = [
    { id: 1, title: 'First Blog Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second  Blog Post', content: 'This is the content of the second post.' },
];

const BlogPost = ({ match }) => {

    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const foundPost = mockPosts.find(p => p.id === parseInt(id));
        setPost(foundPost);
    }, [id]);

    // for Api use the below code and remove  the above code
    //   const [post, setPost] = useState(null);

    //     useEffect(() => {
    //         axios.get(`/api/posts/${match.params.id}`).then(response => {
    //             setPost(response.data);
    //         });
    //     }, [match.params.id]);

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