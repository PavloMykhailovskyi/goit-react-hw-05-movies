
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getTrendingMovies } from "services/API";
import css from './Home.module.css'


const Home = () => {
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
      <main className={css.main_container}>
        <ul className={css.list}>
          {trendingMovies.map(movie => {
            return (
              <li key={movie.id} className={css.list_item}>
                <NavLink to={`/movies/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <p className={css.item_text}>{movie.title}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>
        ;
      </main>
    );
}

export default Home;

 
