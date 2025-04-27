import axiosInstance from "./axiosInstance";

export const fetchMovies = async () => {
  const res = await axiosInstance.get("/movie");
  return res.data;
};

export const createUser = async (user) => {
  try {
    const res = await axiosInstance.post("/user", user);
    return res.data;
  } catch (error) {
    console.error(
      "Error creating user:",
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const getUser = async (id) => {
  const res = await axiosInstance.get(`/user/${id}`);
  return res.data;
};

export const updateUser = async (id, user) => {
  const res = await axiosInstance.put(`/user/${id}`, user);
  return res.data;
};

export const deleteUser = async (id) => {
  const res = await axiosInstance.delete(`/user/${id}`);
  return res.data;
};

export const getAllUsers = async () => {
  const res = await axiosInstance.get("/user");
  return res.data;
};
