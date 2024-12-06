import css from "./Heart.module.css";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from "react";
import { toast } from "react-toastify";
import { addFavorite, deleteFavorite } from "../../redux/favorites/operations";

import "react-toastify/dist/ReactToastify.css";
import { selectFavoriteItems } from "../../redux/favorites/selectors";

const Heart = ({ data }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const favorites = useSelector(selectFavoriteItems);
  const teacherId = data.id;

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const result = favorites.find((favoritItem) => {
      return teacherId === favoritItem.teacherId;
    });
    setIsFavorite(result);
  }, [favorites]);
  const navigate = useNavigate();
  const handleClick = () => {
    if (isLoggedIn === false) {
      redirectToAuth();
    } else {
      toggleFavoriteItem();
    }
  };

  const toggleFavoriteItem = () => {
    if (isFavorite) {
      dispatch(deleteFavorite(isFavorite.id));
    } else {
      dispatch(addFavorite({ teacherId: teacherId, userId: user.id }));
    }
  };
  const redirectToAuth = () => {
    toast("Wow so easy!");
    navigate("/login");
  };
  return (
    <div onClick={handleClick}>{isFavorite ? <FaHeart /> : <FaRegHeart />}</div>
  );
};

export default Heart;
