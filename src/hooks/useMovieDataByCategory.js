import { useQuery } from "react-query";

const fetchMoviesData = async (id) => {
  console.log("Fetching");
  const reqBody = {
    category : {
        type : parseInt(id)
    }
}
  const response = await fetch("/user/get-movie-by-category", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body : JSON.stringify(reqBody)
  });
  const data = await response.json();
  return data.movie
};

export const useMovieDataByCategory = (id) => {
  return useQuery(["Single Movie",id],()=> fetchMoviesData(id));
};