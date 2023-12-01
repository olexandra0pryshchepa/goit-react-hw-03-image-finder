import React, { Component } from 'react';
import { API_KEY } from 'Api';
import axios from 'axios';


import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    currentPage: 1,
    images: [],
    isLoading: false,
    error: null,
    searchQuery: '',
    isOpenModal: false,
    modalImage: null,
  };
  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.currentPage !== this.state.currentPage
    ) {
      try {
        this.setState({
          isLoading: true,
        });
        const { data } = await axios.get(
          `https://pixabay.com/api/?q=${this.state.searchQuery}&page=${this.state.currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );

        this.setState({
          images: [...prevState.images, ...data.hits],
          currentPage: prevState.currentPage + 1,
        });
      } catch (error) {
        console.error('Error fetching images: ', error);
      } finally {
        this.setState({
          isLoading: false,
        });
      }
    }
  }
  handleSearchSubmit = query => {
    this.setState({ searchQuery: query });
  };

  loadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  openModal = largeImageURL => {
    this.setState({
      isOpenModal: true,
      modalImage: largeImageURL,
    });
  };

  closeModal = () => {
    this.setState({
      isOpenModal: false,
      images: this.state.images,
    });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={this.state.images} openModal={this.openModal} />
        {this.state.isLoading && <Loader />}
        {this.state.images.length > 0 && <Button onClick={this.loadMore} />}
        {this.state.isOpenModal && (
          <Modal
            isOpen={this.state.isOpenModal}
            img={this.state.modalImage}
            onClose={this.closeModal}
          />
        )}
      </div>
    );
  }
}
