import { useQuery } from "react-query";

const fetchMoviesData = async () => {
  console.log("Fetching");
  const response = await fetch("user/get-all-moviess", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  const movies = data.movie;
  return movies;
};

export const useMoviesData = () => {
  return useQuery("Movies", fetchMoviesData);
};
