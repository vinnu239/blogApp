import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: []
};

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        addPost: (state, action) => {
            state.posts.push(action.payload);
        },
        resetPosts: (state) => {
            state.posts = [];
        }
    }
});

export const { setPosts, addPost, resetPosts } = blogSlice.actions;

export default blogSlice.reducer;
