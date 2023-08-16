import React from 'react'
import css from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types'
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

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  setSelectedImage: PropTypes.func.isRequired,
}