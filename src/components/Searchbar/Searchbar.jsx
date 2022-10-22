// import PropTypes from 'prop-types';


const SearchBar = ({ onSubmit } ) => {
    return <header className="search_bar">
    <form className="form">
      <button type="submit" className="button" onSubmit={onSubmit}>
        <span className="button-label">Search</span>
      </button>
  
      <input
        className="input"
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
  };
  
// SearchBar.propTypes = {
// onSubmit: PropTypes.func.isRequired,
// };
export default SearchBar;