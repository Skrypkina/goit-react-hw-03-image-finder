import React, { Component } from 'react';
import SearchForm from './SearchForm/SearchForm';
import Gallery from './Gallery/Gallery';
import Modal from './Modal/Modal';
import * as api from '../services/api';

const app = {
  display: 'grid',
  gridGap: '24px',
  alignContent: 'center',
  gridTemplateColumns: 'auto auto auto',
};

const largeImg = {
  height: '600px',
  objectFit: 'cover',
};

export default class App extends Component {
  state = {
    images: [],
    isModalOpen: false,
    selectedImageId: null,
  };

  fetchImages = (query, page) => {
    api
      .fetchImages(query, page)

      .then(data =>
        this.setState(state => ({
          images: [...state.images, ...data.data.hits],
        })),
      );
  };

  clearImages = () => {
    this.setState({ images: [] });
  };

  openModal = id => {
    this.setState({ isModalOpen: true, selectedImageId: id });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { images, isModalOpen, selectedImageId } = this.state;
    const imageToFind = images.find(image => image.id === selectedImageId);

    return (
      <div style={app}>
        <SearchForm
          onSubmit={this.fetchImages}
          onChange={this.clearImages}
          items={images}
        >
          {images.length > 0 && (
            <Gallery items={images} onOpenModal={this.openModal} />
          )}
        </SearchForm>
        {isModalOpen && (
          <Modal onClose={this.closeModal}>
            <img src={imageToFind.largeImageURL} alt="some" style={largeImg} />
          </Modal>
        )}
      </div>
    );
  }
}
