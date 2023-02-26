import { Component } from 'react';
import Searchbar from 'components/Searchbar';
import Loader from 'components/Loader';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import { fetchImages } from 'services/api';
import { StateType } from './types';
import React from 'react';

class App extends Component <{}, StateType> {
  state = {
    showLoader: false,
    showStartTitle: true,
    images: [],
    page: 1,
    query: '',
    totalFound: 0,
    scroll: 0,
  };

  componentDidUpdate(_: any, prevState: StateType) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.setState({ showLoader: true });

      fetchImages(this.state.query, this.state.page)
        .then(data => {
          if (!data.hits.length) {
            alert('No images found due to your search inquiry');
          } else {
            this.setState((prevState: StateType) => ({
              showStartTitle: false,
              images: [...prevState.images, ...data.hits],
              totalFound: data.totalHits,
              scroll: document.documentElement.scrollHeight,
            }));
          }
        })
        .catch(error => alert(error))
        .finally(() =>
          this.setState({
            showLoader: false,
          })
        );
    }

    if (prevState.scroll !== this.state.scroll && this.state.page > 1) {
      window.scrollTo({
        top: this.state.scroll - 240,
        behavior: 'smooth',
      });
    }
  }

  searchQuery = (newQuery: string) => {
    if (newQuery.trim() !== this.state.query) {
      this.setState({
        page: 1,
        query: newQuery.trim(),
        images: [],
      });
    }
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { showStartTitle, showLoader, images, totalFound } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.searchQuery} />

        {showStartTitle && <h1>Input what you want to find</h1>}

        <ImageGallery images={images} />

        {showLoader && <Loader />}

        {images.length > 0 && images.length < totalFound && (
          <Button loadMore={this.loadMore} />
        )}
      </>
    );
  }
}

export { App };
