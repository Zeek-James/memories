import axios from "axios";

const url = "http://localhost:5000/api/memories";

export const fetchMemories = () => axios.get(url);

export const createMemory = (newPost) => axios.post(url, newPost);

export const updateMemory = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

export const deleteMemory = (id) => axios.delete(`${url}/${id}`);
export const likeMemPost = (id) => axios.patch(`${url}/${id}/likeMemPost`);

 