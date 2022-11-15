import Notiflix from "notiflix";
import { useState } from "react"

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
        <div>
            <form onSubmit={handleSubmit}>
                <button type="submit"></button>
                <input
                    type='text'
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                    value={search}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}