// import React, { useContext } from "react";
// import { MovieContext } from "./MovieContext";
// // import { MovieCard } from "./MovieCard";

// export const MovieSearch = () => {
//   const { movieInput, handleInputMovie, movie, popularMovies,setMovieInput} = useContext(MovieContext);

 
// //   const handleSearch = (e) => {
// //     e.preventDefault();
// //   }

//   return (
//     <div>

//         <div style={{ marginTop: "10px" }}>
//           <input
//             type="text"
//             value={movieInput}
//             onChange={handleInputMovie}
//           />

//         </div>

//     </div>
//   );
// };
import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, createTheme, ThemeProvider } from "@mui/material";

const brightTheme = createTheme({
  palette: {
    primary: {
      main: '#42a5f5', // Set the primary color to a bright pink
    },
  },
});

export const MovieSearch = () => {
  const { movieInput, handleInputMovie } =
    useContext(MovieContext);

  return (
    <div>
      <div style={{ marginTop: "10px", display: "flex", alignItems: "center" }}>
        <SearchIcon style={{ marginRight: "8px", color: "#FF4081" }} />
        <ThemeProvider theme={brightTheme}>
          <TextField
            value={movieInput}
            onChange={handleInputMovie}
            label="Search movies..."
            variant="filled"
            size="small"
            color="primary"
            sx={{
              "& .MuiInputBase-root": {
                width: "300px",
                backgroundColor: "#fff",
                "&:hover": {
                  backgroundColor: "#f5f5f5", // Update the hover background color
                },
              },
              "& .MuiInputLabel-root": {
                color: "#666",
              },
            }}
          />
        </ThemeProvider>
      </div>
    </div>
  );
};
