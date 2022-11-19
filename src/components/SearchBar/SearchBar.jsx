import Notiflix from "notiflix";
import { useState } from "react";
import PropTypes from 'prop-types';
import css from './SearchBar.module.css'
import {BiSearch} from 'react-icons/bi'

export const SearchBar = ({ onSubmit }) => {
    const [search, setSearch] = useState('');

    const handleChange = e => {
        setSearch(e.target.value.toLowerCase());
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (search.trim() === '') {
            Notiflix.Notify.warning('Please enter your quest word');
            return
        }

        onSubmit(search);
        setSearch('');
    }

    return (
      <div className={css.searchBar}>
        <form onSubmit={handleSubmit} className={css.searchForm}>
          <button type="submit" className={css.searchForm_button}>
            <BiSearch size={22} />
            <span className={css.searchForm_button_label}></span>
          </button>
                <input
                    className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={search}
            onChange={handleChange}
          />
        </form>
      </div>
    );
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}