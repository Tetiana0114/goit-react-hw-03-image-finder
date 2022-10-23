import { Component } from 'react';
import { FaSearch } from "react-icons/fa";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  state = {
    searchName: '',
  }
  
  onChangeInput = e => {
    this.setState({ searchName: e.currentTarget.value.toLowerCase() });
  };
  onSubmit = e => {
    e.preventDefault();
    if(this.state.searchName.trim() === '') {
      Notify.info('Введіть текст!');
      return;
    }
    this.props.onSubmit(this.state.searchName);
    this.setState({ searchName: '' });
  };

  render () {
  
    return (
  <header className="search_bar">
    <form className="form" onSubmit={this.onSubmit}>
      <input
        className="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={this.state.searchName}
        onChange={this.onChangeInput}
      />

       <button type="submit" className="button">
        <span className="button-label"><FaSearch size={18}/></span>
      </button>

    </form>
  </header>
      );
    }
    };