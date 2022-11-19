import Notiflix from "notiflix";
import { useEffect } from "react";
import { useState } from "react"
import { useSearchParams } from "react-router-dom";
import { getMovies } from "services/API";
import { SearchBar } from "components/SearchBar/SearchBar";
import { MoviesList } from "components/MoviesList/MoviesList";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const searchWords = searchParams.get('data') ?? '';



    const onHandleSubmit = data => {
        setQuery(data);
        setMovies([]);
        setSearchParams(data !== '' ? {data} : {})
    }

    useEffect(() => {
        if ( !query && !searchWords) {
            return;
        }

        async function downloadMovies() {
            try {
                const movies = await getMovies(
                  searchWords ? searchWords : query
                );
                if (movies.length === 0) {
                    Notiflix.Notify.failure('Sorry, your quest has no result!')
                }
                setMovies(movies);
            } catch (error) {
                
            }
        }

        downloadMovies()
    }, [query, searchWords])

    return (
      <main>
        <SearchBar onSubmit={onHandleSubmit} />
        {movies && <MoviesList movies={movies} />}
      </main>
    );


}

export default Movies;