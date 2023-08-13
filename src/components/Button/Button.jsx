import css from './Button.module.css';


const Button = ({ action, label }) => {
  return (
    <button onClick={action} className={css.button} type="button">
      {label}
    </button>
  );
};

export default Button;
