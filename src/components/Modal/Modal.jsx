import ReactModal from 'react-modal';
import React from 'react';

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
    content: {
    width: '600px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: 0,
    transform: 'translate(-50%, -50%)',
  },
};

export const Modal = ({ isOpen, onClose, img, tags }) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} style={modalStyles}>
      <img src={img} alt={tags} />
    </ReactModal>
  );
};
