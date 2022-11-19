import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Loader from '../Loader';
import css from './SharedLayout.module.css'

export const SharedLayout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.nav}>
         <NavLink to="/" end className={css.nav_link}>
                Home
              </NavLink>
           <NavLink to="/movies" className={css.nav_link}>Movies</NavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
