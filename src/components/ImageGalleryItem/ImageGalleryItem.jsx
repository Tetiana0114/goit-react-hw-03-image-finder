import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ tags, smallImg, largeImg }) => {
    return ( <li className={css.imageGalleryItem}>
    <img className={css.imageGalleryItem_image}
    src={smallImg} 
    alt={tags}
    data-source={largeImg}
    />
    </li>
    );
}

ImageGalleryItem.propTypes = {
smallImg: PropTypes.string.isRequired,
largeImg: PropTypes.string.isRequired,
tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;