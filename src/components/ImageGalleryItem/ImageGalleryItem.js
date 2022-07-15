import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ items, onClick }) => {
  if (!items) {
    return
  }
  return items.map(item => (
    <li key={item.id} className={s.ImageGalleryItem} onClick={()=> onClick(item.largeImageURL)}>
    <img
      className={s.ImageGalleryItemImage}
      src={item.webformatURL}
      alt={item.user}
    />
  </li>
  ))
};

export default ImageGalleryItem;
