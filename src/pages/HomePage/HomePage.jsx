import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import DocumentTitle from "../../components/DocumentTitle";
import css from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/teachers");
  };
  return (
    <div>
      <DocumentTitle>Home</DocumentTitle>

      <div className={css.sectionMain}>
        <div className={css.sectionDescription}>
          <h2>
            Unlock your potential with the best <span>language</span> tutors
          </h2>
          <p>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <Button onClick={handleClick} className={css.button}>
            Get started
          </Button>
        </div>
        <div className={css.sectionFoto}>
          <img src="/src/assets/block.svg" alt="teachers description"></img>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default HomePage;
