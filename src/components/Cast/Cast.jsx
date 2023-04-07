import { useEffect, useState } from 'react';
import { getCast } from 'API/fetch';
import css from 'components/Cast/Cast.module.css'

const { useParams } = require('react-router-dom');

const Cast = () => {
    const { movieId } = useParams();

    const [casts , setCast] = useState([]);
    const [, setError] = useState(null);
    

    useEffect(() => {
     
         getCast(movieId)
        .then(response => response.json())
        .then(actors => {
               setCast(actors.cast)
            // console.log(actors.cast)
        })
        .catch(error => setError(error))
    }, [movieId]);

   
    return <>
        {casts &&
            <ul className={css.list}>
                {casts.map(oneActor => (
                    <li key={oneActor.id}>
                        <img src={oneActor.profile_path && `https://image.tmdb.org/t/p/w500/${oneActor.profile_path}`} alt={oneActor.name} width='250'/>
                        <p>{oneActor.name}</p>
                        <p>Character: {oneActor.character}</p>
                    </li>
                ))}
            </ul>
        }
    </>
}

export default Cast;