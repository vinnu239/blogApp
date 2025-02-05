import { getAllBlogPosts, createBlogPosts,getPostById,CreateComment,getAllComment } from "../Api/Blogapi"
import { setPosts,setComments} from "../../slices/blogSlice";

export const getAllPosts = () => async (dispatch) => {
    try {
        const response = await getAllBlogPosts();
        dispatch(setPosts(response));
    } catch (error) {
        console.log(error);
    }


};

export const getAllCommentsByPostID=(postId)=>async(dispatch)=>{
    try {
        const response = await getAllComment(postId);
        console.log(response,"in blogaction");
        dispatch(setComments(response));
    } catch (error) {
        
    }
}

export const createBlogPost = (blogPost) => async (dispatch) => {
    try {
        const response = await createBlogPosts(blogPost);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

export const getPostId = (id) => async (dispatch) => {
    try {
        const response = await getPostById(id);
       return response;
    } catch (error) {
        console.log(error);
    }
}

export const createComment = (comment) => async (dispatch) => {
    try {
        const response = await CreateComment(comment);
    } catch (error) {
        console.log(error);
    }
}