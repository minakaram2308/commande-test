import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content modal-lg">
        <button className="modal-close" onClick={onClose}>×</button>
      <div className='modal-lg'>
          {children}</div>
      </div>
    </div>
  );
};

export default Modal;
