
import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { Movies } from "pages/Movies";
import { MovieDetails } from "pages/MovieDetails";



export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to='/' end>Home</NavLink>
          <NavLink to='/movies'>Movies</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};
