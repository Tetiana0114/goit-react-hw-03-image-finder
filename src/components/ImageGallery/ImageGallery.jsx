import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import css from './ImageGallery.module.css'

const ImageGallery = ({ images }) => {
  return (
    <ul  className={css.imageGallery}>{images.map(image => (
      <ImageGalleryItem
      key={image.id}
      smallImg={image.webformatURL}
      largeImg={image.largeImageURL}
      tags={image.tags}
      />
      ))}
  </ul>
  )
}
ImageGallery.propTypes = {
images: PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number.isRequired,
})),
};

export default ImageGallery;