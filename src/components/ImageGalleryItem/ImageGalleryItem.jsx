// import PropTypes from 'prop-types';


const ImageGalleryItem = ({ url, name } ) => {
  return <li className="gallery_item">
    <img src={url} alt={name} />
    </li>
};

// ImageGalleryItem.propTypes = {
//   url: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
// };
export default ImageGalleryItem;