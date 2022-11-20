import Loader from "components/Loader";
import { Suspense, useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom"
import { getMovieDetails } from "services/API";
import css from './MovieDetails.module.css'

const MovieDetails = () => {
     
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const refLocation = useRef(location);
    // const backLinkHref = location.state?.from ?? '/';
    

    useEffect(() => {
      async function getMovie() {
        const movie = await getMovieDetails(id);
        setMovie(movie);
      }
      getMovie();
    }, [id]);

    if (!movie) {
        return null;
    }
    
    const {
        backdrop_path,
        title,
        release_date,
        vote_average,
        overview,
        genres,
    } = movie;


    return (
      <main className={css.main}>
        <p>
          <NavLink
            to={refLocation.current.state?.from ?? '/'}
            className={css.link_back}
          >
            Get back
          </NavLink>
        </p>
        <div className={css.wrap}>
          <img
            className={css.image}
            src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
            alt={title}
          />
          <div>
            <h2>
              {title} {new Date(release_date).getFullYear()}
            </h2>
            <p>User score: {Math.floor(vote_average * 10)}%</p>
            <h3>Overview:</h3>
            <p>{overview}</p>
            <h3>Genres:</h3>
            <p>{genres ? genres.map(genre => genre.name).join(' ') : '-'}</p>
          </div>
        </div>
        <h2>Additional information</h2>
        <ul className={css.list}>
          <li className={css.list_item}>
            <NavLink to="cast" className={css.link}>
              Cast
            </NavLink>
          </li>
          <li className={css.list_item}>
            <NavLink to="reviews" className={css.link}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    );
}

export default MovieDetails;