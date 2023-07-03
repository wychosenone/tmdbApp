// import { useContext } from "react";
// import { MovieContext } from "./MovieContext";
// import { useNavigate, useLocation } from "react-router-dom";
// import Rating from "./Rating";

// export default function MovieDetail() {
//   const { detail } = useContext(MovieContext);
//   const navigate = useNavigate();
// //   const location = useLocation();

// //   const handleBack = () => {
// //     navigate(location.state?.referrer || "/");
// //   };
// const handleBack = () => {
//     navigate(-1);
//   };

//   return (
//     <div className="detail-page">
//       <button onClick={handleBack}>Back</button>
//       {detail && (
//         <div>
//           <img
//             src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
//             alt="poster"
//           />
//           <h2>{detail.title}</h2>
//           <p>iMdb id: {detail.imdb_id}</p>
//           <p>Status: {detail.status}</p>
//           <p>Release date: {detail.release_date}</p>
//           <p>
//             Homepage:{" "}
//             <a href={detail.homepage} target="_blank" rel="noopener noreferrer">
//               {detail.homepage}
//             </a>
//           </p>
//           <div>
//             Rating: <Rating rating={detail.vote_average} />
//           </div>
//           <div>
//             Genres:{" "}
//             <ul>
//               {detail.genres.map((item) => (
//                 <li key={item.id}>{item.name}</li>
//               ))}
//             </ul>
//           </div>
//           <p>Overview: {detail.overview}</p>
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Typography, Grid, Chip, CircularProgress, Paper, Box } from "@mui/material";
import Rating from "./Rating";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 

export default function MovieDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieData = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b3005a9f8c12bc9eed70ccc5183f0b84`);
      setDetail(response.data);
    };
    
    fetchMovieData();
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  if (!detail) {
    return <CircularProgress />;
  }

  




  return (
    <div className="detail-page">
      <Button
        variant="outlined"
        onClick={handleBack}
        style={{ marginTop: "20px", marginLeft: "30px", float: "left" }}
      >
        Back
      </Button>

      {detail && (
        <Paper variant="outlined" style={{ padding: "20px", margin: "20px" }}>
          <Grid container spacing={2} alignItems="flex-start">
            <Grid item xs={12} sm={4}>
              <img
                src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
                alt="poster"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Grid>

            <Grid item xs={12} sm={8}>
              <Typography variant="h4" component="h2" gutterBottom>
                {detail.title}
              </Typography>

              <Box sx={{ my: 2, borderBottom: 1, borderColor: "divider" }}>
                <Typography variant="body1" component="p" gutterBottom>
                  iMdb id: {detail.imdb_id}
                </Typography>

                <Typography variant="body1" component="p" gutterBottom>
                  Status: {detail.status}
                </Typography>

                <Typography variant="body1" component="p" gutterBottom>
                  Release date: {detail.release_date}
                </Typography>

                <Typography variant="body1" component="p" gutterBottom>
                  Homepage:{" "}
                  <a
                    href={detail.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {detail.homepage}
                  </a>
                </Typography>

                <Typography variant="body1" component="p" gutterBottom>
                  Rating: <Rating rating={detail.vote_average} />
                </Typography>
                <div>
                  <Typography variant="body1" component="p" gutterBottom>
                    Spoken Languages:
                  </Typography>
                  <div>
  {detail.spoken_languages.map((language) => (
    <Box
      key={language.iso_639_1}
      component={Chip}
      label={language.name}
      variant="outlined"
      size="small"
      sx={{
        marginRight: "8px",
        marginBottom: "8px",
        transition: "background-color 0.3s",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "lightgray",
          color: "blue" // Update the color value here
        }
      }}
    />
  ))}
</div>
                </div>

                <div>
                  <Typography variant="body1" component="p" gutterBottom>
                    Genres:
                  </Typography>
                  <div>
                    {detail.genres.map((genre) => (
                      <Chip
                        key={genre.id}
                        label={genre.name}
                        variant="outlined"
                        size="small"
                        sx={{
                            marginRight: "8px",
                            marginBottom: "8px",
                            transition: "background-color 0.3s",
                            cursor: "pointer",
                            "&:hover": {
                              backgroundColor: "lightgray",
                              color: "blue" // Update the color value here
                            }
                          }}
                      />
                    ))}
                  </div>
                </div>
              </Box>

              <Typography variant="body1" component="p" gutterBottom>
                Overview: {detail.overview}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      )}
    </div>
  );
}
