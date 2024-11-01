import DocumentTitle from "../../components/DocumentTitle";
import css from "./HomePage.module.css";

const HomePage = () => {
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
          <button>Get started</button>
        </div>
        <div className={css.sectionFoto}>
          <img src="/src/assets/block.svg" alt="teachers description"></img>
        </div>
        {/* <h1 className={css.title}>
          PHONEBOOK{" "}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1> */}
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default HomePage;
