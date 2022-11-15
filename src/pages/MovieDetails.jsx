import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { getMovieDetails } from "services/API";

export const MovieDetails = () => {
     
const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    

    useEffect(() => {
      async function getMovie() {
        const movie = getMovieDetails(movieId);
        setMovie(movie);
      }
      getMovie();
    }, [movieId]);

    if (!movie) {
        return null;
    }
    
    // const {
    //     backdrop_path,
    //     title,
    //     release_date,
    //     vote_average,
    //     overview,
    //     genres,
    // } = movie;


    return (
      <main>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.title}
        />
        <h2>
          {movie.title} {new Date(movie.release_date).getFullYear()}
        </h2>
        <p>User score: {movie.vote_average}</p>
        <h3>Overview:</h3>
        <p>{movie.overview}</p>
        <h3>Genres:</h3>
        <p>{movie.genres ? movie.genres.map(genre => genre.name).join(' ') : '-'}</p>
      </main>
    );
}