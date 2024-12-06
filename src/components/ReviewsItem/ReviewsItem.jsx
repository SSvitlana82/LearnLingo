import css from "./ReviewsItem.module.css";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import Avatar from "react-avatar";

const ReviewsItem = ({ data }) => {
  return (
    <div>
      <div>
        <div>
          <Avatar name="Foo Bar" />
        </div>
        <div>
          <h3>{data.reviewer_name}</h3>
          <p>
            <FaStar />
            {data.reviewer_rating}
          </p>
        </div>
      </div>
      <p>{data.comment}</p>
    </div>
  );
};

export default ReviewsItem;
