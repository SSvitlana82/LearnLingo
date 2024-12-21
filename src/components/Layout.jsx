import { Suspense, useEffect } from "react";
import { AppBar } from "./AppBar/AppBar";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/auth/selectors";
import { fetchFavorite } from "../redux/favorites/operations";
import { auth, checkUser } from "../utils/auth";
import { logginUser } from "../redux/auth/slice";

export const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    if (user.id) {
      const params = {
        userId: user.id,
        filters: {
          limit: 999,
        },
      };
      dispatch(fetchFavorite(params));
    }
  }, [user]);
  useEffect(() => {
    checkUser((user) => {
      if (user) {
        dispatch(
          logginUser({
            name: user.displayName,
            email: user.email,
            id: user.uid,
          })
        );
      }
    });
  }, []);

  return (
    <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 16px" }}>
      <ToastContainer />
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
