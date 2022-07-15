import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

export default function Modal({ children, close }) {
  const closeModal = e => {
    if (e.code === 'Escape') {
      close();
      document.removeEventListener('keydown', closeModal);
      return;
    }
    if (e.target.localName === 'div') {
      close();
      document.removeEventListener('click', closeModal);
      return;
    }
  };
  document.addEventListener('keydown', closeModal);
  document.addEventListener('click', closeModal);
  return createPortal(
    <div className={s.Overlay}>
      <div className={s.Modal}>{children}</div>
    </div>,
    modalRoot
  );
}
