import React from 'react';
import BlogList from '../BlogList';
import CreatePost from '../CreatePost';


const HomePage = () => {
    return (
        <div>
            <h1>All Blog Posts</h1>
            <CreatePost />
            <BlogList />
        </div>
    );
}

export default HomePage;