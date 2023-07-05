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
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { MovieContext } from './MovieContext';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const MovieSearch = () => {
  const { movieInput, handleInputMovie } = React.useContext(MovieContext);

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        value={movieInput}
        onChange={handleInputMovie}
        placeholder="Search movies…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
};
