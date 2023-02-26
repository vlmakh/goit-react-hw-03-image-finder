import React from 'react';
import { Component } from 'react';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  onSearchInput = (event: { currentTarget: { name: string; value: string; }; }) => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    if (!this.state.searchQuery.trim()) {
      return alert('Empty query. Please input something for search');
    }

    this.props.onSubmit(this.state.searchQuery);
  };

  render() {
    return (
      <header className={css.searchBar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.searchForm__button}>
            <span className={css.searchForm__buttonlabel}></span>
          </button>

          <input
            className={css.searchForm__input}
            type="text"
            name="searchQuery"
            autoComplete="off"
            autoFocus
            value={this.state.searchQuery}
            onChange={this.onSearchInput}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
