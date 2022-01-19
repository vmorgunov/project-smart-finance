import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
    Backdrop,
    Container,
    CloseButton,
    Title,
    Button,
    CloseIcon,
    ButtonBox
} from './ModalOutMobile.styled';


const modalRoot = document.querySelector('#modal-root')

export const ModalOutMobile = ({ onClose, onAgree, title }) => {
  
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

 
   const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  
    return createPortal(
      <Backdrop onClick={handleBackdropClick}>
        <Container>
          <CloseButton type="button" onClick={onClose}>
            <CloseIcon/>
          </CloseButton>
          <Title>{title}</Title>
          <ButtonBox>
            <Button type="button" onClick={onAgree}>Yes</Button>
            <Button type="button" onClick={onClose}>No</Button>
          </ButtonBox>
        </Container>
      </Backdrop>, modalRoot);
  }