import { getAllBlogPosts, createBlogPosts } from "../Api/Blogapi"
import { setPosts } from "../../slices/blogSlice";

export const getAllPosts = () => async (dispatch) => {
    try {
        const response = await getAllBlogPosts();
        dispatch(setPosts(response));
    } catch (error) {
        console.log(error);
    }


}

export const createBlogPost = () => { }