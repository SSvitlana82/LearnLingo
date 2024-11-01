import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";

export const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  //TODO Favorite зробити тут тернарнім оператором
  return (
    <div>
      {!isLoggedIn ? (
        <div className={css.navAuth}>
          <NavLink to="/login" className={css.link}>
            <svg className={css.icon}>
              //TODO перевірь як вставляти зі спліта
              <use xlink:href="#icon-log-in"></use>
            </svg>
            Log In
          </NavLink>
          <NavLink to="/register" className={css.link}>
            Registration
          </NavLink>
        </div>
      ) : (
        <UserMenu />
      )}
    </div>
  );
};
