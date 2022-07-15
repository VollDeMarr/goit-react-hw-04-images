// import { Component } from 'react';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ items, onClick }) => {
  // console.log(items)
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

// class ImageGalleryItem extends Component {
//   render() {
//     let elements = [];
//     // console.log(this.props.prop)
//     if (this.props.prop) {
//       elements = this.props.prop;
//     }
//     return elements.map(element => (
      // <li key={element.id} className={s.ImageGalleryItem} onClick={()=> onClick(element.largeImageURL)}>
      //   <img
      //     className={s.ImageGalleryItemImage}
      //     src={element.webformatURL}
      //     alt={element.user}
      //   />
      // </li>
//     ));
//   }
// }
// export default ImageGalleryItem;
