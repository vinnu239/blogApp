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

export const getAllComment = async (postId) => {
    try {
        const response = await axios.get(`${API_URL}/getAllComments/${postId}`);
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

export const getPostById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data', error);
        throw error;
    }
}

export const CreateComment = async (comment) => {
    try {
        const response = await axios.post(`${API_URL}/createcomment`, comment);
        return response.data;
    } catch (error) {
        console.error('Error creating comment', error);
        throw error;
    }
}