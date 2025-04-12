import axiosInstance from "./axiosInstance";

export const fetchMovies = async () => {
  const res = await axiosInstance.get("/movie");
  return res.data;
};
