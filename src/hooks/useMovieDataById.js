import { useQuery } from "react-query";

const fetchMovieData = async (id) => {
  console.log("Fetching");
  const reqBody = {
    movie_id : id
}
  const response = await fetch("/user/get-movie", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body : JSON.stringify(reqBody)
  });
  const data = await response.json();
  const movie = data.movie;
  return movie;
};

export const useMovieDataById = (id) => {
  return useQuery(["Single Movie",id],()=> fetchMovieData(id));
};