import { useEffect } from "react"

const ImageModal = ({ image, onClose, onNext, onPrev }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, onNext, onPrev]);

    return (
        <div className="modal-overlay">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="modal-close">×</button>

                <button onClick={onPrev} className="modal-nav modal-prev">‹</button>

                <div className="modal-image-container">
                    <img src={image.src} alt={image.alt} />
                </div>

                <button onClick={onNext} className="modal-nav modal-next">›</button>
            </div>
        </div>
    );
}

export default ImageModal;