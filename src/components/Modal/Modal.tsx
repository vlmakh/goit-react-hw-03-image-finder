import { Component } from 'react';
import css from './Modal.module.css';
import { createPortal } from 'react-dom';
import React from 'react';
import { ReactNode } from 'react';

const modalRoot = document.querySelector('#modal-root') as HTMLElement;

type PropsType = {
  children: ReactNode,
  onClose: () => void,
}

export default class Modal extends Component <PropsType, {}> {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscape);
  }

  handleEscape = (event: { code: string; }) => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdrop = (event: { currentTarget: any; target: any; }) => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={css.overlay} onClick={this.handleBackdrop}>
        <div className={css.modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
