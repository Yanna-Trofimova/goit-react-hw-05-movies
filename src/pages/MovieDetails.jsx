import { Suspense, useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { getMovieDetails } from "API/fetch";
import css from 'pages/styles/MoviesDetails.module.css'

const MoviesDetails = () => {
    const [film , setFilm] = useState({});
    const [,setError] = useState(null);


    const { movieId } = useParams();
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/');
    console.log('location novie details', location)
    console.log('backLinkLocationRef' , backLinkLocationRef)
    // console.log(film)
    
    useEffect(() => {
     
         getMovieDetails(movieId)
        .then(response => response.json())
        .then(trends => {
               
            setFilm(trends);
            // console.log(trends)
        })
        .catch(error => setError(error))
    }, [movieId]);


    const allGenres = film.genres;
  

    return <>
          <div className={css.container}>
        <Link to={backLinkLocationRef.current} className={css.backBtn}>Go Back</Link></div>
          {film &&
              <div className={css.containerFilm}>
             
                <img src={film.poster_path && `https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt={film.original_title} />
                <div className={css.containerInfo}>
                  <h1>{film.release_date && film.original_title} ({new Date(film.release_date).getFullYear()})</h1>
                  <p> User score: {Math.floor((film.vote_average) * 10)} %</p>
                  <h2>Overview</h2>
                  <p>{film.overview}</p>
                  <h3>Genres</h3>
                  <p>{film.genres && allGenres.map(genre => genre.name).join(' ')}</p>
             </div>
              </div>
          }

        <p className={css.addInfo}>Additional information</p>
          <ul>
              
            <li>
                <Link to="cast">Cast</Link>
            </li>
            <li>
                <Link to="reviews">Reviews</Link>
            </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
    </>
}


export default MoviesDetails;