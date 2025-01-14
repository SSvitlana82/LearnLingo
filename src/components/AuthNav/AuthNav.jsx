import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import Icon from "../Icon/Icon";

export const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  //TODO Favorite зробити тут тернарнім оператором
  return (
    <div>
      {!isLoggedIn ? (
        <div className={css.navAuth}>
          <NavLink to="/login" className={css.link}>
            <Icon
              className={css.icon}
              id="log-in"
              width="10px"
              height="8px"
            ></Icon>
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
