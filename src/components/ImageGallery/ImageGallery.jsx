import ImageGalleryItem from 'components/ImageGalleryItem';
import css from './ImageGallery.module.css'

const ImageGallery = ({ images }) => {
  return (
    <ul  className={css.imageGallery}>{images.map(image => (
      <ImageGalleryItem
      key={image.id}
      webFormat={image.webformatURL}
      largeFormat={image.largeImageURL}
      tags={image.tags}
      />
      ))}
  </ul>
  )
  
}
export default ImageGallery;