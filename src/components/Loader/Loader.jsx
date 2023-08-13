import Loader, { Circles } from 'react-loader-spinner';
import css from './Loader.module.css';

const Spinner= () => (
  <Circles
    className={css.Loader}
    type="Circles"
    color="blue"
    height={80}
    width={80}
  />
);

export default Spinner;