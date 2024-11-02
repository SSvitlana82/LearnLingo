import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";
import { AuthNav } from "../AuthNav/AuthNav";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.navigation}>
      {/* <div className={css.conteinerNav}> */}
      <NavLink to="/teachers" className={css.link}>
        <div className={css.logo}>
          <svg className={css.logoIcon}>
            <use xlink:href="#icon-ukraine"></use>
          </svg>
          <h6 className={css.logoName}>LearnLingo</h6>
        </div>
      </NavLink>
      {/* </div> */}
      <div className={css.conteinerHome}>
        <NavLink to="/" className={css.link}>
          Home
        </NavLink>
        <NavLink to="/teachers" className={css.link}>
          Teachers
        </NavLink>
        {isLoggedIn ? (
          <NavLink to="/favorites" className={css.link}>
            Favorites
          </NavLink>
        ) : (
          ""
        )}
      </div>
      <AuthNav />
    </nav>
  );
};
