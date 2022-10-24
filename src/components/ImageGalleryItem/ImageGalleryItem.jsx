import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ tags, webFormat, largeFormat }) => {
    return ( <li className={css.imageGalleryItem}>
    <img className={css.imageGalleryItem_image}
    src={webFormat} 
    alt={tags}
    data-source={largeFormat}
    />
    </li>
    );
}

export default ImageGalleryItem;


ImageGalleryItem.propTypes = {
webFormat: PropTypes.string.isRequired,
tags: PropTypes.string.isRequired,
largeFormat: PropTypes.string.isRequired,
};