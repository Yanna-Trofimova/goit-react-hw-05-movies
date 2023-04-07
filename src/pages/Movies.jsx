import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getMovieByName } from "API/fetch";
import css from 'pages/styles/Movies.module.css'

const Movies = () => {
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [, setError] = useState(null);
     const [name, setName] = useState('');
    
    const text = searchParams.get('movie') || '' ;
    const location = useLocation();

    useEffect(() => {
        if (!text) {
        return;
      }
        getMovieByName(text)
        .then(response => response.json())
            .then(movie => {
                  if (movie.results.length === 0) {
            
           return alert('К сожалению по Вашему запросу ничего не найдено');
          }
                setFilteredMovies(movie.results)
        })
        .catch(error => setError(error))
  },[text]);
    
   
    const handelChange = ({ target }) => {
        setName(target.value.toLowerCase())
    }

    const handelSubmit = (e) => {
        e.preventDefault();

        if (name.trim() === '')
        {
            alert('Введіть назву')
            return;
        }
       
        setFilteredMovies([]);
        setSearchParams({ movie: name });
    }




    return <div>
        
            <form onSubmit={handelSubmit} className={css.form}>
            <input
                 className={css.input}
                    type="text"
                    value={name}
                    onChange={handelChange}
                />
            <button type="submit" className={css.btn} >Search</button>
            
                
        </form>
        <div>
        {filteredMovies.map(film => {
                    return <li key={film.id}>
                        <Link to={`${film.id}`} state={{ from: location }}> {film.title} </Link>
                    </li>
                })}</div>
    </div>
}

export default Movies;