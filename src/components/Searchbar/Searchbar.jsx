import css from './Searchbar.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

class Searchbar extends Component {
    state = { query: '' };

    handleChange = e => {
        this.setState({ query: e.currentTarget.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
    };

    render() {
        const { query } = this.state;

        return (
            <header className={css.Searchbar}>
                <form onSubmit={this.handleSubmit} className={css.SearchForm}>
                    <button type="submit" className={css.SearchFormButton}>
                        <span className={css.SearchFormButtonLabel}>Search</span>
                    </button>
                    <input
                        onChange={this.handleChange}
                        value={query}
                        className={css.SearchForm}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                    <button type="submit" className={css.SearchFormButton}>
                        <span className={css.SearchFormButtonLabel}>Load more</span>
                    </button>
                </form>
            </header>
        );
    }
}

Searchbar.defaultProps = {
    handleChange: () => null,
    handleSubmit: () => null,
};

Searchbar.propTypes = {
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
};

export default Searchbar;