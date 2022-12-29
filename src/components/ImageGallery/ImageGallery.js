import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageItem from 'components/ImageItem';

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.gallery}>
      {images.map(image => (
        <ImageItem key={image.id} image={image} />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageItem.propTypes = {
  images: PropTypes.arrayOf(),
};
