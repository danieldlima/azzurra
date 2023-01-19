import React, { ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';

import { useLockedBody, useOnClickOutside } from 'usehooks-ts';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
}

function Modal({ open, onClose, children }: ModalProps) {
  useLockedBody(open, 'body');
  const contentRef = useRef(null);

  const handleClickOutside = () => {
    onClose();
  };

  useOnClickOutside(contentRef, handleClickOutside);

  if (!open) return null;

  return createPortal(
    <div
      className={
        'flex items-center justify-center h-inherit w-full fixed inset-0 z-50 bg-backdrop-dark backdrop-blur'
      }
    >
      <div
        className={
          'absolute right-6 top-4 sm:right-12 sm:top-12 w-10 h-11 cursor-pointer hover:scale-90 transition-all'
        }
        onClick={onClose}
      >
        <span
          className={
            'absolute block w-full h-0.5 rounded transition-all bg-azzurra-gold-100 top-2/4 -translate-y-2/4 -rotate-45'
          }
        />

        <span
          className={
            'absolute block w-8 top-2/4 -translate-y-2/4 h-0.5 rounded mb-2 transition-all bg-azzurra-gold-100 ' +
            'w-0 opacity-0'
          }
        />

        <span
          className={
            'absolute block w-full h-0.5 rounded transition-all top-2/4 -translate-y-2/4 rotate-45 bg-azzurra-gold-100'
          }
        />
      </div>

      <div
        ref={contentRef}
        className={
          'w-11/12 sm:w-6/12 aspect-video shadow-2xl z-10 flex flex-col border border-modal rounded-md overflow-hidden'
        }
      >
        {children}
      </div>
    </div>,
    document.getElementById('portal') as Element
  );
}

export default Modal;
