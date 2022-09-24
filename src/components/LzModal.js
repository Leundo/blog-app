import React from 'react';
import cn from 'classnames';
import '../styles/LzModal.css';
import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

import LzButton from './LzButton';

function createPortalRoot() {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'lz-modal-root');
    return modalRoot;
}

export default function LzModal({
    isOpen,
    children,
    className,
    onClose,
    onBtnClick,
    buttonText,
    title,
}) {
    const bodyRef = useRef(document.querySelector('body'));
    const portalRootRef = useRef(document.getElementById('lz-modal-root') || createPortalRoot());

    useEffect(() => {
        bodyRef.current.appendChild(portalRootRef.current);
        const portal = portalRootRef.current;
        const bodyEl = bodyRef.current;
        return () => {
            portal.remove();
            bodyEl.style.overflow = '';
        }
    }, []);

    useEffect(() => {
        const updatePageScroll = () => {
            if (isOpen) {
                bodyRef.current.style.overflow = 'hidden';
            } else {
                bodyRef.current.style.overflow = '';
            }
        };
        updatePageScroll();
    }, [isOpen]);

    return createPortal(
        <div
            aria-hidden={isOpen ? "false" : "true"}
            className={cn('lz-modal', className, {open: isOpen})}
            onClick={onClose}
        >
            <div className='lz-modal-content' onClick={e => e.stopPropagation()}>
                <div className='lz-modal-header'>
                    <h3 className='lz-modal-title'>{title}</h3>
                </div>
                <div className='lz-modal-body'>
                {children}
                </div>
                <div className='lz-modal-footer'>
                    <LzButton onClick={onBtnClick} className='lz-modal-button' text={buttonText}/>
                </div>
            </div>
        </div>,
        portalRootRef.current,
    );
}
