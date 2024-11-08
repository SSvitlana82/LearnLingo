import iconSVG from "../../assets/symbol-defs.svg";

const Icon = ({ id, width = 0, height = 0, className = "" }) => {
  return (
    <svg
      className={`${className}`}
      width={width}
      height={height}
      aria-hidden="true"
    >
      <use href={`${iconSVG}#icon-${id}`}></use>
    </svg>
  );
};

export default Icon;
