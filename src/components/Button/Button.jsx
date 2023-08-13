import css from './Button.module.css';
import PropTypes from 'prop-types';

const ButtonLoadMore = ({ loadMore }) => {
  return (
    <div className={css.WrapperButtonLoadMore}>
      <button className={css.ButtonLoadMore} onClick={loadMore}>
        Load more
      </button>
    </div>
  );
};

ButtonLoadMore.propTypes = {
  loadMore: PropTypes.func.isRequired,
};

export default ButtonLoadMore;
