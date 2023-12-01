import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import './ImageGallery.css'

export const  ImageGallery = ({ images, openModal }) => {
  return (
    <ul className="imageGallery">
      {' '}
      <ImageGalleryItem images={images} openModal={openModal} />
    </ul>
  );
}
