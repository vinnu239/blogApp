import { getAllBlogPosts, createBlogPosts } from "../Api/Blogapi"
import { setPosts,addPost } from "../../slices/blogSlice";

export const getAllPosts = () => async (dispatch) => {
    try {
        const response = await getAllBlogPosts();
        dispatch(setPosts(response));
    } catch (error) {
        console.log(error);
    }


};

export const createBlogPost = (blogPost) => async (dispatch) => {
    try {
        const response = await createBlogPosts(blogPost);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}