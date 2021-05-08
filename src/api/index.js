import axios from 'axios';

let url = "http://localhost:5000/posts";
url = "https://mymemory-book.herokuapp.com/posts";

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => {
    return axios.post(url, newPost);
}

export const updatePost = (id, updatedPost) => {
    return axios.patch(`${url}/${id}`, updatedPost);
}

export const deletePost = (id) => {
    return axios.delete(`${url}/${id}`);
}

export const likePost = (id) => {
    return axios.patch(`${url}/${id}/likePost`);
}