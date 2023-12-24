import './ImageGalleryItem.css'

export const ImageGalleryItem = ({ image, openModal }) => {

  return (
    <li className="imageGalleryItem" key={image.id}>
      <img
        className="imageGalleryItemImage"
        src={image.webformatURL}
        alt={image.tags}
        onClick={() => openModal(image.largeImageURL)}
      />
    </li>
  );
};
