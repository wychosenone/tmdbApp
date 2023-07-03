// import React, { useContext } from "react";
// import { MovieContext } from "./MovieContext";
// import { MovieCard } from "./MovieCard";
// import Home from './Home';

// export default function Main(){
//   const { movieInput, handleInputMovie, movie, popularMovies } = useContext(
//     MovieContext
//   );

//   return (
//     <div>
//         <Home />
//       {/* <MovieCard movies={movieInput ? movie : popularMovies} /> */}
//     </div>
//   );
// };
import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import { MovieCard } from "./MovieCard";
import Home from "./Home";

export default function Main() {
  const { movieInput,popularMovies, movie} = useContext(MovieContext);

  return (
    <div>
        {movieInput?  null : <Home /> }
      <MovieCard movies={movieInput ? movie : popularMovies}  />
    </div>
  );
}