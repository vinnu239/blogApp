import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    comments:[]
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
        },
        setComments:(state,action)=>{
            state.comments=action.payload;
        }   
    }
});

export const { setPosts, addPost, resetPosts,setComments } = blogSlice.actions;

export default blogSlice.reducer;
