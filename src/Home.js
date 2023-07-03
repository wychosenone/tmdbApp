// import { useContext } from "react";
// import { MovieCard } from "./MovieCard";
// import { MovieContext } from "./MovieContext";


// export default function Home(){
//   const { movie, popularMovies, movieInput } = useContext(MovieContext);

//   return (
//     <div>
//       <h2>Popular Movies:</h2>
//       <MovieCard movies={movieInput ? movie : popularMovies} />
//       {/* <MovieCard movies={popularMovies} /> */}
//     </div>
//   );
// };

// import React, { useContext } from "react";
// import { MovieContext } from "./MovieContext";
// import { MovieCard } from "./MovieCard";

import React from "react";
import { Typography, Grid } from "@mui/material";


export default function Home() {

  return (
    <div className="home">
      <Typography variant="h4" component="h2" gutterBottom margin="20px">
        Popular Movies
      </Typography>

    </div>
  );
}


