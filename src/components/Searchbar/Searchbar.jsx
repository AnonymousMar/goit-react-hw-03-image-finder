import css from './Searchbar.module.css';
import React from 'react';

class SearchBar extends React.Component {
    state = {
        currentSearchQuery: '',
    };

    onSearchInputChange = e => {
        this.setState({ currentSearchQuery: e.target.value });
    };

    onSubmitForm = e => {
        e.preventDefault();

        if (this.state.currentSearchQuery) {
            this.props.onSubmit(this.state.currentSearchQuery);
        }

        this.setState({ currentSearchQuery: '' });
    };

    render() {
        return (
            <header className={css.searchbar}>
                <form className={css.searchForm} onSubmit={this.onSubmitForm}>
                    <button type="submit" className={css.searchFormButton}>
                        <span className={css.searchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={css.searchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.currentSearchQuery}
                        onChange={this.onSearchInputChange}
                    />
                </form>
            </header>
        );
    }
}

export default SearchBar;