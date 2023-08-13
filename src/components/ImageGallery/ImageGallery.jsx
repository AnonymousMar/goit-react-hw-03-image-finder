import React from 'react'
import css from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ setSelectedImage, images }) => {
  return (
    <ul className={css.gallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          setSelectedImage={setSelectedImage}
          {...image}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;