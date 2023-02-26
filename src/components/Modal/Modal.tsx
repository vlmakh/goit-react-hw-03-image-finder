import { Component } from 'react';
import css from './Modal.module.css';
import { createPortal } from 'react-dom';
import React from 'react';
import { ReactNode } from 'react';

const modalRoot = document.querySelector('#modal-root') as HTMLDivElement;

type PortalPropsType = {
  children: ReactNode;
  onClose: () => void;
};

export default class Modal extends Component<PortalPropsType> {
  componentDidMount(): void {
    window.addEventListener('keydown', this.handleEscape);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keydown', this.handleEscape);
  }

  handleEscape = (event: { code: string }): void => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdrop = (event: { currentTarget: any; target: any }): void => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render(): React.ReactElement<PortalPropsType> {
    return createPortal(
      <div className={css.overlay} onClick={this.handleBackdrop}>
        <div className={css.modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
