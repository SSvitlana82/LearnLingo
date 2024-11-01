import { Navigation } from "../Navigation/Navigation";
import css from "./AppBar.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AppBar = () => {
  return (
    <header className={css.header}>
      <Navigation />

      <ToastContainer />
    </header>
  );
};
