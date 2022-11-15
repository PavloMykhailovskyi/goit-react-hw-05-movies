import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '64afbe7e98104731aad90684412bb048';

export const getTrendingMovies = async () => {
    const options = {
        params: {
            api_key: API_KEY,
        }
    }

    const response = await axios.get('/trending/movie/day', options);
    return response.data.results;
}

export const getMovies = async query => {
    const options = {
        params: {
            api_key: API_KEY,
            query,
        }
    }

    const response = await axios.get('/search/movie', options)
    return response.data.results;
}

export const getMovieDetails = async movie_id => {
    const options = {
        params: {
            api_key: API_KEY,
        }
    }

    const response = await axios.get(`/movie/${movie_id}`, options)
    return response.data.results;
}

export const getMovieCast = async movieId => {
    const options = {
        params: {
            api_key:API_KEY,
        }
    }

    const response = await axios.get(`/movie/${movieId}/credits`, options);
    return response.data.cast;
}

export const getMovieReviews = async movieId => {
    const options = {
        params: {
            api_key: API_KEY,
        }
    }

    const response = await axios.get(`/movie/${movieId}/reviews`, options);
    return response.data.results;
}