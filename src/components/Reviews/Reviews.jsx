import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getReviews } from "API/fetch";

const Reviews = () => {
    const { movieId } = useParams();

    const [recension , setRecension] = useState([]);
    const [, setError] = useState(null);

    useEffect(() => {
     
        getReviews(movieId)
        .then(response => response.json())
             .then(reviews => {
            setRecension(reviews.results);
            // console.log(reviews.results)
        })
        .catch(error => setError(error))
    }, [movieId]);

    return ( <>
        { recension.length !== 0 ?  
            <ul>
                {recension.map((rec) => {
                    return (
                        <li key={rec.id}>
                            <h2>Author: {rec.author}</h2>
                            <p>{rec.content}</p>
                        </li>
                    );
                })}
            </ul> : <p>We don't have any reviews for this movie </p>
        }
    </>)
}

export default Reviews;

