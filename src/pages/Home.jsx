import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getTrendingMovies } from "services/API";


export const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        async function downloadTrendingMovies() {
            try {
                const movies = await getTrendingMovies();
                setTrendingMovies(movies);
            } catch (error) {

            }
        }
        downloadTrendingMovies()
    }, [])


    return (
        <main>
            <ul>
                {trendingMovies.map((movie) => {
                    return(
                        <li key={movie.id}>
                            <Link to={`${movie.id}`}>{movie.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}
