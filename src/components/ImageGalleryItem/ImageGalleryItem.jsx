const ImageGalleryItem = ({ tags, webFormat, largeFormat }) => {
    return ( <li className="gallery_item">
    <img 
    src={webFormat} 
    alt={tags}
    data-source={largeFormat}
    />
    </li>
    );
}

export default ImageGalleryItem;