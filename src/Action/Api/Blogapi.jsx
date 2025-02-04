import axios from "axios";

const API_URL = 'http://localhost:8080/blogs';

export const getAllBlogPosts = async () => {

    try {
        const response = await axios.get(`${API_URL}`);
        return response.data;

    } catch (error) {
        console.error('Error fetching data', error);
        throw error;

    }
}

export const createBlogPosts = async (blogPost) => {

    try {
        const response = await axios.post(`${API_URL}/create`, blogPost);
       return response.data;
    } catch (error) {
        console.error('There was an error creating the blog post!', error);
    }
}