import React, { Component } from 'react';
import { fetchImages } from 'Api';
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
    error: '',
    searchQuery: '',
    isOpenModal: false,
    modalImage: null,
    totalHits: 0,
  };
  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery, currentPage } = this.state;
    if (
      prevState.searchQuery !== searchQuery ||
      prevState.currentPage !== currentPage
    ) {
      try {
        this.setState({
          isLoading: true,
          error: "",
        });
        const { totalHits, hits } = await fetchImages(
          searchQuery,
          currentPage
        );
        this.setState(prevState => {
          return {
            images: [...prevState.images, ...hits],
            totalHits: totalHits,
          };
        });
       

        
      } catch (error) {
        this.setState({
          error: "Error fetching images: ",
        });
        console.error('Error fetching images: ', error);
      } finally {
        this.setState({
          isLoading: false,
        });
      }
    }
  }
  handleSearchSubmit = query => {
    this.setState({ searchQuery: query, images: [], currentPage: 1 });
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
    const {
      images,
      isLoading,
      isOpenModal,
      modalImage,
      totalHits,
      currentPage,
    } = this.state;
    const showBtn = Math.ceil(totalHits / 12) > currentPage;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} openModal={this.openModal} />
        {isLoading && <Loader />}
        {images.length > 0 && showBtn && <Button onClick={this.loadMore} />}
        {isOpenModal && (
          <Modal
            isOpen={isOpenModal}
            img={modalImage}
            onClose={this.closeModal}
          />
        )}
      </div>
    );
  }
};
