import PropTypes from 'prop-types';
import css from './Button.module.css'

const Button = ({ loadMore } ) => {
    return <button type="button" onClick={loadMore} className={css.button}>Load more</button>
  };
  
Button.propTypes = {
    loadMore: PropTypes.func.isRequired,
};

export default Button;