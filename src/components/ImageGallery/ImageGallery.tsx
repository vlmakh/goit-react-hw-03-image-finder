import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';
import React from 'react';
import { ImagesType } from 'components/types';

const ImageGallery = ({ images }: ImagesType) => {
  return (
    <ul className={css.gallery}>
      {images.map(image => (
        <li className={css.item} key={image.id}>
          <ImageGalleryItem image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
