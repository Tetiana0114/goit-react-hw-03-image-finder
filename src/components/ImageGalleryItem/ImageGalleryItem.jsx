import css from './ImageGalleryItem.module.css'

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