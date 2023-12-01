import './ImageGalleryItem.css'

export const ImageGalleryItem = ({ images, openModal }) => {
  
  if (!Array.isArray(images) || images.length === 0) {
    return null; 
  }

  return images.map(image => (
    <li className="imageGalleryItem" key={image.id}>
      <img
        className="imageGalleryItemImage"
        src={image.webformatURL}
        alt={image.tags}
        onClick={() => openModal(image.largeImageURL)}
      />
    </li>
  ));
};
