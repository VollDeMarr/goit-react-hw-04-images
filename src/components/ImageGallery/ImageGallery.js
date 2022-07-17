import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

export default function ImageGallery({ requestName, page, changePage }) {
  const [request, setRequest] = useState('');
  const [items, setItems] = useState([]);
  const [KEY] = useState('28064028-9753e04b4800a7fc07442f07d');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalData, setModalData] = useState('');

  const loadMore = () => {
    changePage(page + 1);
  };

  const showModal = callback => {
    setIsOpenModal(true);
    setModalData(callback);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  useEffect(() => {
    if (!requestName) {
      return;
    }
    setStatus('pending');
    setRequest(requestName);

    fetch(
      `https://pixabay.com/api/?q=${requestName}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
      .then(response => {
        if (page === 1) {
          setStatus('resolved');
          setItems(response.hits);
        } else {
          if (requestName !== request) {
            setItems(response.hits);
            setStatus('resolved');
          } else {
            setItems(prevState => [...prevState, ...response.hits]);
            setStatus('resolved');
          }
        }
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [KEY, page, requestName]);

  return (
    <>
      {status === 'idle' && (
        <div className={s.container}>
          <h2>Почекун чекає на ваш запит</h2>
          <img
            className={s.img}
            src="https://uatodaynews.files.wordpress.com/2016/01/16388356_1424726200871476_1750686625721868660_n.jpg"
            alt="Почекун"
          />
        </div>
      )}
      {status === 'rejected' && <h1>{error.message}</h1>}
      <>
        <ul className={s.ImageGallery}>
          <ImageGalleryItem items={items} onClick={showModal} />
        </ul>
        {status === 'pending' && <Loader />}
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
