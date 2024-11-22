import ReviewsItem from "../ReviewsItem";
import css from "./ReviewsList.module.css";
import { useState } from "react";

const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((review) => {
        return (
          <li key={review.id}>
            <ReviewsItem data={review} />
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewsList;
