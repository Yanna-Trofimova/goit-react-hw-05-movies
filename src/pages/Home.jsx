import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTrendingMovie } from "API/fetch";
import css from 'pages/styles/Home.module.css'


const Home = () => {
    const [trendsMovies, setTrendsMovies] = useState([]);
    const [,setError] = useState(null);

    useEffect(() => {
        getTrendingMovie()
        .then(response => response.json())
        .then(trends => {
                const arrayTrends = trends.results;
                //  console.log(arrayTrends);
                setTrendsMovies(arrayTrends);
        })
        .catch(error => setError(error))
  },[]);

    return <>
     <h2 className={css.title} >Trending today</h2>
      <ul className={css.list}>
        {trendsMovies.map(movie => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <p>{movie.title}</p>
          </Link>
        ))}
      </ul>
    </>
}

export default Home;