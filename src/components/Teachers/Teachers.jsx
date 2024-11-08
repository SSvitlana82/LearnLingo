import css from "./Teachers.module.css";
import { useState } from "react";
import TeacherCard from "../TeacherCard/TeacherCard";

const Teachers = ({ teachers }) => {
  return (
    <div className={css.list}>
      <ul className={css.list}>
        {teachers.map((teacher, index) => {
          return (
            <li key={index}>
              <TeacherCard data={teacher} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Teachers;
