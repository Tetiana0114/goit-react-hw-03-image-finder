import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul>{images.map(image => (
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