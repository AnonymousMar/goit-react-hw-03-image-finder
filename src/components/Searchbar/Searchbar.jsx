import css from './Searchbar.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
class SearchBar extends React.Component {
    state = {
        currentSearchQuery: '',
    };

   onSubmitForm = e => {
       e.preventDefault();
       if (this.state.currentSearchQuery) {
           this.props.onSubmit(this.state.currentSearchQuery);
       }
       if (this.state.currentSearchQuery === '') {
           Notify.failure('Please enter you request!');
           return;
    // this.setState({ currentSearchQuery: '' });
       };
       if (this.state.currentSearchQuery === '') {
           return;
       } 
       this.props.onSubmit(this.state.currentSearchQuery.toLowerCase().trim()); 

       if (this.onSubmit === this.value ) {
           Notify.failure('We already found images. Please, enter another phrase')
           }      
    }
    
    onSearchInputChange = e => {
        this.setState({ currentSearchQuery: e.target.value });
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

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}