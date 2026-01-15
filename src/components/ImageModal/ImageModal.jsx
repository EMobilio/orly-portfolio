import { useEffect } from "react";
import { MdNavigateNext, MdNavigateBefore,  MdClose } from "react-icons/md";
import './ImageModal.css';

const ImageModal = ({ image, onClose, onNext, onPrev }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };

        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [onClose, onNext, onPrev]);

    // Close modal when clicking overlay
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="modal-close"><MdClose /></button>

                <button onClick={onPrev} className="modal-nav modal-prev"><MdNavigateBefore /></button>

                <div className="modal-image-container">
                    <img src={image.src} alt={image.alt} />
                </div>

                <div className="modal-info-container">
                    <h2>{image.title}</h2>
                    <p>{image.description}</p>
                </div>

                <button onClick={onNext} className="modal-nav modal-next"><MdNavigateNext /></button>
            </div>
        </div>
    );
};

export default ImageModal;