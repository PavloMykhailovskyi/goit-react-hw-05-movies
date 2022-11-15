import Notiflix from "notiflix";
import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import { getMovies } from "services/API";
import { SearchBar } from "components/SearchBar";

export const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const onHandleSubmit = query => {
        setQuery(query);
        setMovies([]);
        setLoading(true);
    }

    useEffect(() => {
        if (!loading) {
            return;
        }

        async function downloadMovies() {
            try {
                const movies = await getMovies(query);
                if (movies.length === 0) {
                    Notiflix.Notify.failure('Sorry, your quest has no result!')
                }
                setMovies(movies);
                setLoading(false);
            } catch (error) {
                
            } finally {
                setLoading(false);
            }
        }

        downloadMovies()
    }, [query, loading])

    return (
        <main>
            <SearchBar onSubmit={onHandleSubmit} />
            <ul>
                {movies && movies.map((movie => {
                    return (
                        <li key={movie.id}>
                            <Link to={`${movie.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                <h3>{movie.title}</h3>
                            </Link>
                        </li>
                    )
                }))}
            </ul>
        </main>
    )


}