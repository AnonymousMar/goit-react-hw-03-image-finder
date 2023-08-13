import React from 'react'
import css from './ImageGalleryItem.module.css';


const ImageGalleryItem = ({
    webformatURL,
    largeImageURL,
    setSelectedImage,
}) => {
    const onImageClick = () => {
        setSelectedImage(largeImageURL);
    };
    return (
        <li onClick={() => onImageClick()} className={css.galleryItem}>
            <img className={css.galleryItemImage} src={webformatURL} alt="" />
        </li>
    );
};

export default ImageGalleryItem;