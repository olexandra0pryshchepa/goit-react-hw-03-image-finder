import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import './ImageGallery.css'

export const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className="imageGallery">
      {images.map((image) => (
        <ImageGalleryItem key={image.id} image={image} openModal={openModal} />
      ))}
    </ul>
  );
};
