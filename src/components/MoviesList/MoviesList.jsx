import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import css from './MoviesList.module.css'

export const MoviesList = ({ movies }) => {
    const location = useLocation();

    return (
      <ul className={css.list}>
        {movies.map(({ id, title, poster_path }) => {
          return (
            <li key={id} className={css.list_item}>
              <NavLink to={`/movies/${id}`} state={{ from: location }}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                />
                <p className={css.item_text}>{title}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
    );
}

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            poster_path: PropTypes.string.isRequired,
        })
    ),
};