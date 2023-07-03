// import React, { useContext } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { MovieContext } from "./MovieContext";
// import Rating from "./Rating";

// export const MovieCard = ({ movies }) => {
//   const {
//     page,
//     setPage,
//     fetchDetail,
//     filter,
//     handleFilterChange,
//     handleSortDirectionChange
//     // handleRateSortDirectionChange,
//     // handleDateSortDirectionChange
//   } = useContext(MovieContext);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleClickCard = async (id) => {
//     await fetchDetail(id);
//     navigate("/detail", { state: { referrer: location.pathname } }); // Save the current location path
//   };

//   return (
//     <div>
//       {movies && (
//         <div className="filter-bar">
//           <p>Total results: {movies.total_results}</p>
//           <div className="filter-container">
//             <span>Filtered by: </span>
//             <select value={filter.filterType} onChange={handleFilterChange}>
//             <option value="">Select filter...</option>
//             <option value="rate">Rate</option>
//             <option value="date">Release Date</option>
//           </select>
//           <button onClick={handleSortDirectionChange}>
//           {filter.filterType === "rate" && filter.sortDirection === "asc"
//                   ? "⬆️"
//                   : "⬇️"}
//           </button>

          
//           </div>
//           <div className="movie-list">
//             {movies &&
//               movies.results.map((item) => (
//                 <div
//                   className="movie-card"
//                   onClick={() => handleClickCard(item.id)}
//                   key={item.id}
//                 >
//                   <div className="movie-card-image">
//                     <img
//                       src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
//                       alt="poster"
//                     />
//                   </div>
//                   <div className="movie-card-title">
//                     <h2>{item.title}</h2>
//                   </div>
//                   <Rating rating={item.vote_average} />
//                 </div>
//               ))}
//           </div>
//           <div className="page-adjust">
//             <button
//               onClick={() =>
//                 page === 1 ? setPage(page) : setPage((prev) => prev - 1)
//               }
//             >
//               last
//             </button>
//             <span>
//               {" "}
//               {page}/{movies.total_pages}{" "}
//             </span>
//             <button
//               onClick={() =>
//                 page === movies.total_pages
//                   ? setPage(page)
//                   : setPage((prev) => prev + 1)
//               }
//             >
//               next
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };





// import React, { useContext } from "react";
// // import { useNavigate, useLocation } from "react-router-dom";
// import { MovieContext } from "./MovieContext";
// import Rating from "./Rating";

// export const MovieCard = ({ movies }) => {
//   const {
//     page,
//     setPage,
//     // fetchDetail,
//     filter,
//     handleFilterChange,
//     handleSortDirectionChange,
//     handleClickCard
//     // handleRateSortDirectionChange,
//     // handleDateSortDirectionChange
//   } = useContext(MovieContext);
//   // const navigate = useNavigate();
//   // const location = useLocation();

//   // const handleClickCard = async (id) => {
//   //   await fetchDetail(id);
//   //   navigate("/detail")
//   //   // , { state: { referrer: location.pathname } }); // Save the current location path
//   // };
//   // const handleClickCard = async (id) => {
//   //   await fetchDetail(id);
//   //   navigate(`/detail/${id}`);
//   // };

//   return (


    
//     <div> 
//       {movies && (
//         <div className="filter-bar">
//           <p>Total results: {movies.total_results}</p>
//           <div className="filter-container">
//             <span>Filtered by: </span>
//             <select value={filter.filterType} onChange={handleFilterChange}>
//             <option value="">Select filter...</option>
//             <option value="rate">Rate</option>
//             <option value="date">Release Date</option>
//           </select>
//           <button onClick={handleSortDirectionChange}>
//           {filter.filterType === "rate" && filter.sortDirection === "asc"
//                   ? "⬆️"
//                   : "⬇️"}
//           </button>

          
//           </div>
//           <div className="movie-list">
//             {movies &&
//               movies.results.map((item) => (
//                 <div
//                   className="movie-card"
//                   onClick={() => handleClickCard(item.id)}
//                   key={item.id}
//                 >
//                   <div className="movie-card-image">
//                     <img
//                       src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
//                       alt="poster"
//                     />
//                   </div>
//                   <div className="movie-card-title">
//                     <h2>{item.title}</h2>
//                   </div>
//                   <Rating rating={item.vote_average} />



//                   <div>
//                   <span>Like</span>
//                   <input
//                   type="checkbox"
//                   id="checkbox"
//                    checked={true
//                 //     favouriteList.some(
//                 //   (dog) => dog.id === selectedBreeds[dogNum].id
//                 // )  
//               }
//                 // onChange={(e) =>
//                 //   handleFavouriteList(
//                 //     selectedBreeds[dogNum].id,
//                 //     e.target.checked
//                 //   )
//                 // }
//               />
//             </div>




            
//                 </div>
//               ))}
//           </div>
//           <div className="page-adjust">
//             <button
//               onClick={() =>
//                 page === 1 ? setPage(page) : setPage((prev) => prev - 1)
//               }
//             >
//               last
//             </button>
//             <span>
//               {" "}
//               {page}/{movies.total_pages}{" "}
//             </span>
//             <button
//               onClick={() =>
//                 page === movies.total_pages
//                   ? setPage(page)
//                   : setPage((prev) => prev + 1)
//               }
//             >
//               next
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import Rating from "./Rating";
import { Select, MenuItem, Button, Box, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const MovieCard = ({ movies }) => {
  const {
    page,
    setPage,
    filter,
    handleFilterChange,
    handleSortDirectionChange,
    handleClickCard,
    handleToggleFavorite,
    isMovieLiked,
    errorMessage,
  } = useContext(MovieContext);
  const moviesPerPage = 20;
  const totalPages = Math.ceil(movies && movies.length / moviesPerPage);

  return (
    <div>
      {movies && (
        <div>
          <p>
            Total results:{" "}
            {movies.total_results ? movies.total_results : movies.length}
          </p>
          <div className="filter-container">
            <span style={{ marginRight: "8px", fontWeight: "bold" }}>
              Filtered by:
            </span>
            <Select
              value={filter.filterType}
              onChange={handleFilterChange}
              size="small"
              style={{
                marginRight: "8px",
                width: "100px",
                height: "30px",
                paddingRight: "10px",
              }}
              displayEmpty
              renderValue={(selected) => {
                if (!selected) {
                  return "Select a filter type";
                }
                return selected;
              }}
            >
              <MenuItem value="" disabled>
                Select a filter type
              </MenuItem>
              <MenuItem value="rate">Rate</MenuItem>
              <MenuItem value="date">Release Date</MenuItem>
            </Select>
            <Button
              onClick={handleSortDirectionChange}
              size="small"
              style={{ padding: "6px", minWidth: "unset", fontSize: "20px" }}
            >
              {filter.filterType === "rate" && filter.sortDirection === "asc"
                ? "⬆️"
                : filter.filterType === "rate" &&
                  filter.sortDirection === "desc"
                ? "⬇️"
                : filter.filterType === "date" && filter.sortDirection === "asc"
                ? "⬆️"
                : filter.filterType === "date" &&
                  filter.sortDirection === "desc"
                ? "⬇️"
                : null}
            </Button>
            {errorMessage? <span>{errorMessage}</span> : null}
          </div>
          <div className="movie-list">
            {movies.results
              ? movies.results.map((item) => (
                  <div
                    className="movie-card"
                    onClick={() => handleClickCard(item.id)}
                    key={item.id}
                  >
                    <div className="movie-card-image">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        alt="poster"
                      />
                    </div>
                    <div className="movie-card-title">
                      <h2>{item.title}</h2>
                    </div>
                    <Rating rating={item.vote_average} />
                    <div>
                      <IconButton
                        onClick={(e) => handleToggleFavorite(e, item.id)}
                        size="small"
                        color={isMovieLiked(item.id) ? "secondary" : "default"}
                        style={{
                          padding: "6px",
                          backgroundColor: "transparent",
                        }}
                      >
                        {isMovieLiked(item.id) ? (
                          <FavoriteIcon style={{ color: "red" }} />
                        ) : (
                          <FavoriteBorderIcon style={{ color: "black" }} />
                        )}
                      </IconButton>
                    </div>
                  </div>
                ))
              : movies.map((item) => (
                  <div
                    className="movie-card"
                    onClick={() => handleClickCard(item.id)}
                    key={item.id}
                  >
                    <div className="movie-card-image">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        alt="poster"
                      />
                    </div>
                    <div className="movie-card-title">
                      <h2>{item.title}</h2>
                    </div>
                    <Rating rating={item.vote_average} />
                    <div>
                      <IconButton
                        onClick={(e) => handleToggleFavorite(e, item.id)}
                        size="small"
                        color={isMovieLiked(item.id) ? "secondary" : "default"}
                        style={{
                          padding: "6px",
                          backgroundColor: "transparent",
                        }}
                      >
                        {isMovieLiked(item.id) ? (
                          <FavoriteIcon style={{ color: "red" }} />
                        ) : (
                          <FavoriteBorderIcon style={{ color: "black" }} />
                        )}
                      </IconButton>
                    </div>
                  </div>
                ))}
          </div>
          <div className="page-adjust">
            <button
              onClick={() =>
                page === 1 ? setPage(page) : setPage((prev) => prev - 1)
              }
            >
              last
            </button>
            <span>
              {page}/{movies.total_pages ? movies.total_pages : totalPages}
            </span>
            <button
              onClick={() =>
                page === movies.total_pages
                  ? setPage(page)
                  : setPage((prev) => prev + 1)
              }
            >
              next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
