import axios from "axios";

export const moviesApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGRiMDMwNjMyMjJhNDI3MzRjZTljMDFmYjdlYzAwNSIsIm5iZiI6MTc3MjAzNjc1OC44MTcsInN1YiI6IjY5OWYyMjk2ODk5MjQ4YTAzZDA0ZDU2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jsggQPb_XhPQA7LvhDdXyrHr9KYWHin0sYIGVwcI62M`
    }
})