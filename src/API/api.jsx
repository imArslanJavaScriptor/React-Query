import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// Get Data
export const getPostsData = () => {
  return api.get("/posts");
};

// Method
export const fetchPosts = async () => {
  try {
    const res = await api.get("/posts?_start=0&_limit=9");
    if (res.status === 200) {
      return res.data;
    } else {
      throw new Error(`Unexpected status code: ${res.status}`);
    }
  } catch (error) {
    // Ensure the error is properly thrown so React Query can use it
    throw new Error(
      error.response?.data?.message ||
        error.message ||
        "An unknown error occurred"
    );
  }
};
