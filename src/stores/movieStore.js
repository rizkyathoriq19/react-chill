import { create } from "zustand";
import { fetchMovies } from "../api/movieApi";

const useMovieStore = create((set) => ({
  movies: [],
  loading: false,
  error: null,
  getMovies: async () => {
    set({ loading: true, error: null });
    try {
      const data = await fetchMovies();
      set({ movies: data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));

export default useMovieStore;
