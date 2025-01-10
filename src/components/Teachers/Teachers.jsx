import css from "./Teachers.module.css";
import { useState } from "react";
import TeacherCard from "../TeacherCard/TeacherCard";

const Teachers = ({ teachers }) => {
  console.log(teachers);
  return (
    <div className={css.list}>
      <ul className={css.list}>
        {teachers.map((teacher, index) => {
          return (
            <li key={teacher.id}>
              <TeacherCard data={teacher} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Teachers;
