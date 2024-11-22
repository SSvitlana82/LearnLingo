import css from "./TeacherCard.module.css";
import { useState } from "react";
import { VscCircleSmallFilled } from "react-icons/vsc";
import ReviewsList from "../ReviewsItem/ReviewsList/ReviewsList";
import { IoBookOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import Heart from "../Heart/Heart";

const TeacherCard = ({ data }) => {
  console.log(data);
  const [isOpened, setIsOpened] = useState(false);
  const toggle = () => {
    setIsOpened(!isOpened);
  };
  return (
    <div className={css.teacherBox}>
      <div className={css.sectionFoto}>
        <img src={data.avatar_url} alt="Foto Teacher" className={css.foto} />
        <VscCircleSmallFilled className={css.point} />
      </div>
      <div>
        <div>
          <p>Languages</p>
          <div>
            <p>
              <IoBookOutline />
              Lessons online
            </p>
            <p>Lessons done: {data.lessons_done}</p>
            <p>
              <FaStar />
              Rating: {data.rating}
            </p>
            <p>Price / 1 hour: {data.price_per_hour}$</p>
            <Heart data={data} /> // TODO для того щоб взяти id
          </div>
        </div>
        <div>
          <div>
            <h2>{data.name}</h2>
            <p>
              Speaks: <span>{data.languages}</span>
            </p>
            <p>
              Lesson Info: <span>{data.lesson_info}</span>
            </p>
            <p>
              Conditions:
              <span>{data.conditions}</span>
            </p>
            {isOpened && <p>{data.experience}</p>}
            {isOpened && <ReviewsList reviews={data.reviews} />}
          </div>

          <div>
            {isOpened && <p onClick={toggle}>Close </p>}
            {!isOpened && <p onClick={toggle}>Read more</p>}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default TeacherCard;
