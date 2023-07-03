import "./styles.css";
import { Routes, Route } from "react-router-dom";
// import { MovieSearch } from "./MovieSearch";
// import { MovieCard } from "./MovieCard";
import MovieProvider from "./MovieContext";
import Nav from "./Nav";
// import Home from "./Home";
import MovieDetail from "./MovieDetail";
import Main from './Main';
import Favorite from './Favorite';
import SignIn from './SignIn.js'
import SignUp from './SignUp.js'



export default function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<MovieDetail />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
    </div>
    </MovieProvider>
  );
}
      //  {/* <Main /> */}
    // {/* <Route path="/search" element={<MovieSearch />} /> */}
    //       {/* <Route path="/detail" element={<MovieDetail />} /> */} 
    //        {/* // USED TO MAKE SEARCH AND DETAIL SINGLE PAGES */}
