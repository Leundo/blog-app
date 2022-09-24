import { useRef, useEffect } from 'react';
import cn from 'classnames';
import { createPortal } from 'react-dom';

import '../styles/LzDrawer.css';

function createPortalRoot() {
    const drawerRoot = document.createElement('div');
    drawerRoot.setAttribute('id', 'drawer-root');
    return drawerRoot;
}

export default function LzDrawer({
    isOpen,
    children,
    className,
    onClose,
    position = 'left',
}) {
    const bodyRef = useRef(document.querySelector('body'));
    const portalRootRef = useRef(document.getElementById('drawer-root') || createPortalRoot());

    useEffect(() => {
        bodyRef.current.appendChild(portalRootRef.current);
        const portal = portalRootRef.current;
        const bodyEl = bodyRef.current;
        return () => {
            // Clean up the portal when drawer component unmounts
            portal.remove();
            // Ensure scroll overflow is removed
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
            className={cn("drawer-container", {
                open: isOpen,
                className
            })}
        >
            <div
                className={cn("drawer", position)}
                role="dialog"
            >
                {children}
            </div>
            <div className="backdrop" onClick={onClose} />
        </div>,
        portalRootRef.current,
    );
}
