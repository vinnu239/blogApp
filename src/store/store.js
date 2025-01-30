import { configureStore } from '@reduxjs/toolkit';
import blogSlice from '../slices/blogSlice'

const store = configureStore({
    reducer: {
        blogs: blogSlice,
    },
    devTools: process.env.NODE_ENV !== 'production', // Enable DevTools in development mode
});

export default store;