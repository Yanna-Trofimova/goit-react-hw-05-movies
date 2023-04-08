
import { lazy } from "react";
import { Route, Routes } from "react-router";
import Cast from "./Cast/Cast";
import Layout from "./Layout/Layout";
import NonExistentPage from "./NonExistentPage/NonExistentPage";
import Reviews from "./Reviews/Reviews";

const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MoviesDetails = lazy(() => import("../pages/MovieDetails"));

export const App = () => {
  return (

      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="movies" element={<Movies/>} />
         <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews/>} />
        </Route >
        <Route path="*" element={<NonExistentPage/>} />
       </Route>
      </Routes>
      
  );
};
 
