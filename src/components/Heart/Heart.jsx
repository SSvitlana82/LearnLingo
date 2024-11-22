import css from "./Heart.module.css";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from "react";
import { toast } from "react-toastify";
import { addFavorite } from "../../redux/favorites/operations";

import "react-toastify/dist/ReactToastify.css";

const Heart = ({ data }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const teacherId = data.id;
  console.log(teacherId);
  console.log(user);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const handleClick = () => {
    if (isLoggedIn === false) {
      redirectToAuth();
    } else {
      toggleFavoriteItem();
    }
    dispatch(addFavorite({ teacherId: teacherId, userId: user.id }));
  };

  const toggleFavoriteItem = () => {};
  const redirectToAuth = () => {
    toast("Wow so easy!");
    navigate("/login");
  };
  return (
    <div onClick={handleClick}>
      <FaHeart />
      <FaRegHeart />
    </div>
  );
};

export default Heart;
