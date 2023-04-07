const API_KEY = "536279afb4312d03acf557076a59277b"
const BASE_URL = "https://api.themoviedb.org/3/"

export const getTrendingMovie  = () => {
    return fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
}

export const getMovieByName = (movieName) => {
    return fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&query=${movieName}&language=en-US&page=1`)
}

export const getMovieDetails = (id) => {
    return fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`)
}

export const getReviews = (id) => {
    return fetch(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
}

export const getCast = (id) => {
    return fetch(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
}