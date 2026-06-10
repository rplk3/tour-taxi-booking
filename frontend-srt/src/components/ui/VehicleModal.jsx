import React, { useState, useEffect } from 'react';
import './VehicleModal.css';

const VehicleModal = ({ vehicle, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);

  // Fallback if no vehicle
  if (!vehicle) return null;

  const gallery =
    vehicle.gallery && vehicle.gallery.length > 0
      ? vehicle.gallery.slice(0, 5) // Up to 5 photos as requested
      : [vehicle.image];

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Keyboard navigation & Escape close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (gallery.length > 1) {
        if (e.key === 'ArrowRight') {
          setActiveImage((prev) => (prev + 1) % gallery.length);
        } else if (e.key === 'ArrowLeft') {
          setActiveImage((prev) => (prev - 1 + gallery.length) % gallery.length);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gallery, onClose]);

  const handleNext = () => {
    setActiveImage((prev) => (prev + 1) % gallery.length);
  };

  const handlePrev = () => {
    setActiveImage((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className="vehicle-modal-overlay" onClick={onClose}>
      <div className="vehicle-modal gallery-only" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="gallery-container">
          {/* Main Image Viewport */}
          <div className="gallery-viewport">
            {/* Prev Arrow */}
            {gallery.length > 1 && (
              <button 
                className="gallery-nav-btn prev" 
                onClick={handlePrev} 
                aria-label="Previous image"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
            )}

            {/* Main Image */}
            <div className="gallery-main-image-wrapper">
              <img 
                src={gallery[activeImage]} 
                alt={`${vehicle.name} view ${activeImage + 1}`} 
              />
            </div>

            {/* Next Arrow */}
            {gallery.length > 1 && (
              <button 
                className="gallery-nav-btn next" 
                onClick={handleNext} 
                aria-label="Next image"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            )}

            {/* Indicator Badge (grid icon + active/total) */}
            {gallery.length > 1 && (
              <div className="gallery-indicator">
                <span className="material-symbols-outlined indicator-icon">apps</span>
                <span className="indicator-text">{activeImage + 1} / {gallery.length}</span>
              </div>
            )}
          </div>

          {/* Thumbnails Row */}
          {gallery.length > 1 && (
            <div className="gallery-thumbnails-wrapper">
              <div className="gallery-thumbnails">
                {gallery.map((img, i) => (
                  <button
                    key={i}
                    className={`gallery-thumb ${i === activeImage ? 'active' : ''}`}
                    onClick={() => setActiveImage(i)}
                  >
                    <img src={img} alt={`${vehicle.name} thumbnail ${i + 1}`} />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VehicleModal;
