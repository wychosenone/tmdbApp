import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import { MovieCard } from "./MovieCard";
import { Typography} from "@mui/material";

export default function Favorite() {
  const { favoriteList,sortedFavorites } = useContext(MovieContext);

//   const total_pages = Math.ceil(favoriteList.length / 20) || 1;

 

  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom margin="20px">
        Favorite List
      </Typography>

      {favoriteList && sortedFavorites.length > 0 ? (
        <MovieCard movies={sortedFavorites} />
      ) : (
        <p>No favorite movies yet.</p>
      )}
    </div>
  );
}
