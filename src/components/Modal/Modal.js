import { createPortal } from 'react-dom';
import { Component } from 'react';
import s from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
    document.addEventListener('click', this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
    document.addEventListener('click', this.closeModal);

  }
  closeModal = e => {
    const { close } = this.props;
    if (e.code === 'Escape') {
      close();
      return;
    }
    if (e.target.localName === 'div') {
      close();
      return;
    }
    console.log(e)
  };
  render() {
    const { children } = this.props;
    return createPortal(
      <div className={s.Overlay}>
        <div className={s.Modal}>{children}</div>
      </div>,
      modalRoot
    );
  }
}
export default Modal;
