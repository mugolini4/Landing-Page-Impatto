import React, { useEffect } from 'react';
import './Popup.css';

const Popup = ({ isOpen, onClose }) => {
    // Prevent scrolling when popup is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            // Also store current scroll position if needed for complex layouts, but hidden overflow usually works for simple pages
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleBackdropClick = (e) => {
        if (e.target.className === 'popup-backdrop') {
            onClose();
        }
    };

    return (
        <div className="popup-backdrop" onClick={handleBackdropClick}>
            <div className="popup-content fade-in-up">
                <button className="popup-close-btn" onClick={onClose} aria-label="Chiudi popup">
                    &times;
                </button>
                <h3 className="popup-title">Scegli come candidarti</h3>
                <p className="popup-description">
                    Seleziona l'opzione corretta in base alla tua candidatura:
                </p>
                <div className="popup-options">
                    <a href="https://forms.gle/NpSuCvHMS5kGtLbw9" target="_blank" rel="noopener noreferrer" className="btn btn-primary popup-btn">
                        Con il mio team
                    </a>
                    <a href="https://forms.gle/J7JivcKQBcubkDt8A" target="_blank" rel="noopener noreferrer" className="btn btn-primary popup-btn popup-btn-outline">
                        Individualmente
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Popup;
