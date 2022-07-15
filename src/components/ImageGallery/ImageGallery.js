// import { Component } from 'react';
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';


export default function ImageGallery({requestName}) {
  const [request, setRequest] = useState(requestName)
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [KEY, setKEY] = useState('28064028-9753e04b4800a7fc07442f07d');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalData, setModalData] = useState('');

  const loadMore = () => {
    setPage(page + 1);
  };

  const showModal = callback => {
    setIsOpenModal(true)
    setModalData(callback)
  };

  const closeModal = () => {
    setIsOpenModal(false)
  };

  useEffect(()=> {},[ request, page])

  // useEffect (()=> {
  //   setStatus('pending')
  //   fetch(
  //     `https://pixabay.com/api/?q=${requestName}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  //   ).then(response => response.json()).then(response => {
  //     if (page === 1) {
  //       setItems(response.hits)
  //       setStatus('resolved')
  //       // this.setState({ items: parsed.hits, status: 'resolved' });
  //     } else {
  //       // if (prevProps.requestName !== this.props.requestName) {
  //       //   this.setState({ items: parsed.hits, status: 'resolved' });
  //       // } else {
  //       //   this.setState(() => {
  //       //     return {
  //       //       items: [...prevState.items, ...parsed.hits],
  //       //       status: 'resolved',
  //       //     };
  //       //   });
  //       // }
  //     }
  //   })

  // })
  // async componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevProps.requestName !== this.props.requestName ||
  //     prevState.page !== this.state.page
  //   ) {
    
  //     // const response = fetch(
  //     //   `https://pixabay.com/api/?q=${requestName}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  //     // );
  //     // const parsed = await response.json();
  //     if (this.state.page === 1) {
  //       this.setState({ items: parsed.hits, status: 'resolved' });
  //     } else {
  //       if (prevProps.requestName !== this.props.requestName) {
  //         this.setState({ items: parsed.hits, status: 'resolved' });
  //       } else {
  //         this.setState(() => {
  //           return {
  //             items: [...prevState.items, ...parsed.hits],
  //             status: 'resolved',
  //           };
  //         });
  //       }
  //     }
  //   }
  // }
  // const { items, error, status, isOpenModal, modalData } = this.state;
  return (
    <>
      {status === 'idle' && (
        <div className={s.container}>
          <h2>Введіть ваш запит</h2>
          <img
            className={s.img}
            src="https://uatodaynews.files.wordpress.com/2016/01/16388356_1424726200871476_1750686625721868660_n.jpg"
            alt="Почекун"
          />
        </div>
      )}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h1>{error.message}</h1>}
      <>
        <ul className={s.ImageGallery}>
          <ImageGalleryItem items={items} onClick={showModal} />
        </ul>
        {status !== 'idle' && <Button onClick={loadMore} />}
      </>
      {isOpenModal && (
        <Modal close={closeModal}>
          <img src={modalData} alt="big brother is watching you" />
        </Modal>
      )}
    </>
  );
}



// class ImageGallery extends Component {
//   state = {
//     items: [],
//     page: 1,
//     KEY: '28064028-9753e04b4800a7fc07442f07d',
//     error: null,
//     status: 'idle',
//     isOpenModal: false,
//     modalData: '',
//   };

//   async componentDidUpdate(prevProps, prevState) {
//     if (
//       prevProps.requestName !== this.props.requestName ||
//       prevState.page !== this.state.page
//     ) {
//       const { page, KEY } = this.state;
//       const { requestName } = this.props;
//       this.setState({ status: 'pending' });
//       const response = await fetch(
//         `https://pixabay.com/api/?q=${requestName}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
//       );
//       const parsed = await response.json();
//       if (this.state.page === 1) {
//         this.setState({ items: parsed.hits, status: 'resolved' });
//       } else {
//         if (prevProps.requestName !== this.props.requestName) {
//           this.setState({ items: parsed.hits, status: 'resolved' });
//         } else {
//           this.setState(() => {
//             return {
//               items: [...prevState.items, ...parsed.hits],
//               status: 'resolved',
//             };
//           });
//         }
//       }
//     }
//   }
// loadMore = () => {
//   this.setState(({ page }) => {
//     return {
//       page: page + 1,
//     };
//   });
// };

// showModal = modalData => {
//   this.setState({
//     isOpenModal: true,
//     modalData,
//   });
// };

// closeModal = () => {
//   this.setState({
//     isOpenModal: false,
//   });
// };

// render() {
//   // const { items, error, status,  } = this.state;
//   const { items, error, status, isOpenModal, modalData } = this.state;
//   const { closeModal, loadMore, showModal } = this;
//   return (
//     <>
//       {status === 'idle' && (
//         <div className={s.container}>
//           <h2>Введіть ваш запит</h2>
//           <img className={s.img} src='https://uatodaynews.files.wordpress.com/2016/01/16388356_1424726200871476_1750686625721868660_n.jpg' alt='Почекун'/>
//         </div>
//       )}
//       {status === 'pending' && <Loader />}
//       {status === 'rejected' && <h1>{error.message}</h1>}
//       <>
//         <ul className={s.ImageGallery}>
//           <ImageGalleryItem items={items} onClick={showModal} />
//         </ul>
//         {status !== 'idle' && <Button onClick={loadMore} />}
//       </>
//       {isOpenModal && (
//         <Modal close={closeModal}>
//           <img src={modalData} alt="big brother is watching you" />
//         </Modal>
//       )}
//     </>
//   );
// }
// }

// export default ImageGallery;
