import { moviesApi } from "../config/htttp";

export function getPopularMovies() {
    return moviesApi.get('movie/popular')
}

export function getMovie(movieId) {
    return moviesApi.get(`movie/${movieId}`)
}