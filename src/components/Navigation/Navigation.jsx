import { NavLink } from "react-router-dom";
/* import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors"; */
import css from "./Navigation.module.css";

export const Navigation = () => {
  const isLoggedIn = true; /* useSelector(selectIsLoggedIn) */

  return (
    <nav>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>
      <NavLink to="/teachers" className={css.link}>
        Teachers
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/favorites" className={css.link}>
          Favorites
        </NavLink>
      )}
    </nav>
  );
};
