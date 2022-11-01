import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageItem from 'components/ImageItem';

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.gallery}>
      {images.map(image => (
        <li key={image.id} className={css.item}>
          <ImageItem image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageItem.propTypes = {
  images: PropTypes.arrayOf(),
};
