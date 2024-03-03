import React, { useEffect } from 'react';

function ModalWithSound({ isOpen, onClose }) {
    useEffect(() => {
        let audio;

        if (isOpen) {
            // Play the sound three times
            for (let i = 0; i < 3; i++) {
                audio = new Audio(require('./sound.wav'));

                audio.play();
            }
        }

        // Cleanup function to pause audio when modal is closed
        return () => {
            if (audio) {
                audio.pause();
            }
        };
    }, [isOpen]);

    return (
        <div className={`modal ${isOpen ? 'show' : ''}`}>
            <div className="modal-dialog" style={{ position: 'absolute' }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal Title</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <p>Modal content goes here...</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalWithSound;
