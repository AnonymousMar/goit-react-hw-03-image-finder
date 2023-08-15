import css from './Modal.module.css';
import React,  { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onModalClosed);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onModalClosed);
  }

  onModalClosed = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
    if (e.key === `Escape`) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className={css.overlay} onClick={this.onModalClosed}>
        <div className={css.modal}>
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;

Modal.propTypes = {
  largeImageURL: PropTypes.object,
  closeModal: PropTypes.func,
};