import css from "./FavoritePage.module.css";
import { useEffect, useState } from "react";
import { selectFavoriteItems } from "../../redux/favorites/selectors";
import TeacherCard from "../../components/TeacherCard/TeacherCard";
import { getTeachersById } from "../../utils/databaseTeachers";
import { useSelector } from "react-redux";

const FavoritPage = ({}) => {
  const [data, setData] = useState([]);
  const favorites = useSelector(selectFavoriteItems);

  const idFavorites = favorites.map((i) => i.teacherId);

  useEffect(() => {
    async function fetchData() {
      const data = await getTeachersById(idFavorites);
      console.log(data);
      setData(data);
    }

    fetchData();
  }, [favorites]);

  return (
    <div className={css.list}>
      <ul className={css.list}>
        {data.map((teacher, index) => {
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

export default FavoritPage;
