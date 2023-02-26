import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal';
import React from 'react';
import { ImageType } from 'components/types';

class ImageGalleryItem extends Component <{image: ImageType}, {showModal: boolean}> {
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

export default ImageGalleryItem;
