import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchMemories = () => API("/posts");

export const createMemory = (newPost) => API.post("/posts", newPost);

export const updateMemory = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);

export const deleteMemory = (id) => API.delete(`/posts/${id}`);

export const likeMemPost = (id) => API.patch(`/posts/${id}/likePost`);

// export const fetchPost = (id) => API.get(`/posts/${id}`);
// export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
// export const fetchPostsByCreator = (name) =>
//   API.get(`/posts/creator?name=${name}`);
// export const fetchPostsBySearch = (searchQuery) =>
//   API.get(
//     `/posts/search?searchQuery=${searchQuery.search || "none"}&tags=${
//       searchQuery.tags
//     }`
//   );

// export const comment = (value, id) =>
//   API.post(`/posts/${id}/commentPost`, { value });

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
