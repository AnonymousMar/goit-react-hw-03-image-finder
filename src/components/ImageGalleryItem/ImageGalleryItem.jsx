import React from 'react'
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({
    alt,
    id,
    webformatURL,
    largeImageURL,
    onClick,
}) => {
    return (
        <li onClick={onClick} key={id} className={css.ImageGalleryItem}>
            <img
                src={webformatURL}
                alt={alt}
                className={css.ImageGalleryItemImage}
                data-img={largeImageURL}
            />
        </li>
    );
};

ImageGalleryItem.propTypes = {
    onClick: PropTypes.func,
    alt: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;