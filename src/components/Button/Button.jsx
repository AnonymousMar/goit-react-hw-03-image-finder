import css from './Button.module.css';
import PropTypes from 'prop-types'

const Button = ({ action, label }) => {
  return (
    <button onClick={action} className={css.button} type="button">
      {label}
    </button>
  );
};

export default Button;

Button.propTypes = {
  action: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}