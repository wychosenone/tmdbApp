import { useEffect, useState, createContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const MovieContext = createContext();



export default function MovieProvider({ children }) {
  const [movieData, setMovieData] = useState(null);
  const [movie, setMovie] = useState(null);
  const [popularMovieData, setPopularMovieData] = useState(null);
  const [popularMovies, setPopularMovies] = useState(null);
  const [movieInput, setMovieInput] = useState("");
  const [page, setPage] = useState(1);
  const [detail, setDetail] = useState(null);
  const [error, setError] = useState('');   //username
  const [errorMessage, setErrorMessage] = useState("");  //movie
  const [filter, setFilter] = useState({
    filterType: "",
    sortDirection: "asc"
  });
  const [favoriteList, setFavoriteList] = useState(() => {
    const localData = localStorage.getItem('favoriteList');
    return localData ? JSON.parse(localData) : [];
  });

  const [username, setUsername] = useState('');
  const [signInStatus, setSignInStatus] = useState(false);
 
//   const [saveSignIn, setSaveSignIn] = useState(false);
//   const [error, setError] = useState('');
//   const { setUsername } = useContext(MovieContext);
//   const {setSignInStatus} = useContext(MovieContext);
//   const {signInStatus} = useContext(MovieContext);




  const navigate = useNavigate();

  const handleToggleFavorite = async (e, id) => {
    e.stopPropagation(); // Prevent event propagation to the parent card

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=b3005a9f8c12bc9eed70ccc5183f0b84`
      );
      const movie = response.data;

      setFavoriteList((prevList) => {
        const isAlreadyLiked = prevList.some((likedMovie) => likedMovie.id === movie.id);
        if (isAlreadyLiked) {
          return prevList.filter((likedMovie) => likedMovie.id !== movie.id);
        } else {
          return [...prevList, movie];
        }
      });
    } catch (error) {
      setErrorMessage('an error occured')
    }
  };

  useEffect(() => {
    localStorage.setItem('favoriteList', JSON.stringify(favoriteList));
  }, [favoriteList]);     
// add localstorage for favoriteList


  const handleSignIn = (e) => {
    e.preventDefault();
  
    const username = e.target.username.value;
    const password = e.target.password.value;
  
    const savedUser = localStorage.getItem(username);
  
    if (savedUser) {
      const user = JSON.parse(savedUser);
  
      if (user.password === password) {
        setUsername(username);
        setSignInStatus(true); // Set sign in status to true
        localStorage.setItem('signInStatus', JSON.stringify(true)); // Save sign in status in local storage
        localStorage.setItem('username', username); // Save username in local storage
        navigate('/');
        return;
      }
    }
  
    setSignInStatus(false);
    localStorage.setItem('signInStatus', JSON.stringify(false));
    setError('Invalid username or password');
  };
  

  useEffect(() => {
    const savedStatus = JSON.parse(localStorage.getItem('signInStatus'));
    const savedUsername = localStorage.getItem('username'); // Retrieve username from local storage
  
    if (savedStatus) {
      setSignInStatus(savedStatus);
    }
  
    if (savedUsername) {
      setUsername(savedUsername); // Set username state if it exists in local storage
    }
  }, []);
  





  // sort movies
  const sortMovies = (movies, filter) => {
    let results = [...movies.results];
  
    if (filter.filterType === "rate") {
      results.sort((a, b) =>
        filter.sortDirection === "asc"
          ? a.vote_average - b.vote_average
          : b.vote_average - a.vote_average
      );
    } else if (filter.filterType === "date") {
      results.sort((a, b) => {
        const releaseDateA = new Date(a.release_date);
        const releaseDateB = new Date(b.release_date);
        return filter.sortDirection === "asc"
          ? releaseDateA - releaseDateB
          : releaseDateB - releaseDateA;
      });
    } 
  
    return { ...movies, results };
  };

  const sortedFavorites = favoriteList.sort((a, b) => {
    if (filter.filterType === "rate") {
      return (
        (filter.sortDirection === "asc" ? a.vote_average - b.vote_average : b.vote_average - a.vote_average) ||
        a.id - b.id
      );
    } else if (filter.filterType === "date") {
      const releaseDateA = new Date(a.release_date);
      const releaseDateB = new Date(b.release_date);
      return (
        (filter.sortDirection === "asc" ? releaseDateA - releaseDateB : releaseDateB - releaseDateA) ||
        a.id - b.id
      );
    }
    return a.id - b.id;
  });


  // handle events

  const handleFilterChange = (e) => {
    setFilter({
      ...filter,
      filterType: e.target.value
    });
    
  };

  const handleSortDirectionChange = () => {
    setFilter({
      ...filter,
      sortDirection: filter.sortDirection === "asc" ? "desc" : "asc"
    });
  };

 

  const handleClickCard = async (id) => {
    await fetchDetail(id);
    navigate(`/detail/${id}`);
  };

  const handleInputMovie =(e) => {
    setMovieInput(e.target.value);
    navigate('/');
  };


 const isMovieLiked = (id) => {
  return favoriteList.some((likedMovie) => likedMovie.id === id);
};


    // fetchs
  // Only fetch the movie data when the search term or page number change.
  useEffect(() => {
    const fetchMovie = async () => {
      if (movieInput) {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=b3005a9f8c12bc9eed70ccc5183f0b84&query=${movieInput}&page=${page}`
          );
          setMovieData(response.data);
          setErrorMessage(null);
        } catch (error) {
          setErrorMessage("an error occured");
        }
      }
    };
    fetchMovie();
  }, [movieInput, page]);

  // Only fetch the popular movie data when the page number changes.
  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=b3005a9f8c12bc9eed70ccc5183f0b84&language=en-US&page=${page}`
        );
        setPopularMovieData(response.data);
        setErrorMessage(null);
      } catch (error) {
        setErrorMessage("something went wrong");
      }
    };
    fetchPopularMovies();
  }, [page]);


  const fetchDetail = async (id) => {
    if (id) {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=b3005a9f8c12bc9eed70ccc5183f0b84`
        );
        setDetail(response.data);
        setErrorMessage(null);
      } catch (error) {
        setErrorMessage("something went wrong");
      }
    }
  };



  // Sort the movie data whenever it or the filter state change.
  useEffect(() => {
    if (movieData) {
      setMovie(sortMovies(movieData, filter));
    }
  }, [movieData, filter]);

  // Sort the popular movie data whenever it or the filter state change.
  useEffect(() => {
    if (popularMovieData) {
      setPopularMovies(sortMovies(popularMovieData, filter));
    }
  }, [popularMovieData, filter]);




//   useEffect(() => {
//     console.log(favoriteList);
//   }, [favoriteList]);


  useEffect(() => {
    setPage(1);
  }, [movieInput]);

//   useEffect(() => {
//     console.log(detail);
//     console.log(movie);
//   }, [detail,movie]);


  return (
    <MovieContext.Provider
      value={{
        movieInput,
        handleInputMovie,
        movie, // sorted movie
        popularMovies, // sorted popular movies
        page,
        setPage,
        detail,
        fetchDetail,
        filter,
        setFilter,
        handleFilterChange,
        handleSortDirectionChange,
        handleClickCard,
        setMovieInput,
        handleToggleFavorite,
        isMovieLiked,
        favoriteList,
        sortedFavorites,
        username, 
        setUsername, 
        signInStatus, 
        setSignInStatus, 
        handleSignIn,
        error,
        setError
   
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}