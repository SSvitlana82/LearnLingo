import css from "./Button.module.css";

const Button = ({ children, className, ...props }) => {
  const cssButton = `${css.button} ${className}`;
  return (
    <button className={cssButton} {...props}>
      {children}
    </button>
  );
};

export default Button;
