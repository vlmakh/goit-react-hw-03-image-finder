import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './ImageItem.module.css';
import Modal from 'components/Modal';

class ImageItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props.image;
    return (
      <>
        <img
          src={webformatURL}
          alt={tags}
          className={css.item__img}
          onClick={this.toggleModal}
        />
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageItem;

ImageItem.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string,
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
  }).isRequired,
};
