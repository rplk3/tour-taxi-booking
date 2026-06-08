import React, { useState, useEffect } from 'react';
import './VehicleModal.css';

const WHATSAPP_NUMBER = '94705178838';

const VehicleModal = ({ vehicle, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!vehicle) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello, I'm interested in the ${vehicle.name}. Could you please provide more details and availability?`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  const gallery =
    vehicle.gallery && vehicle.gallery.length > 0
      ? vehicle.gallery
      : [vehicle.image];

  return (
    <div className="vehicle-modal-overlay" onClick={onClose}>
      <div className="vehicle-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="modal-layout">
          {/* Gallery Side */}
          <div className="modal-gallery">
            <div className="modal-main-image">
              <img src={gallery[activeImage]} alt={vehicle.name} />
            </div>
            {gallery.length > 1 && (
              <div className="modal-thumbnails">
                {gallery.map((img, i) => (
                  <button
                    key={i}
                    className={`modal-thumb ${i === activeImage ? 'active' : ''}`}
                    onClick={() => setActiveImage(i)}
                  >
                    <img src={img} alt={`${vehicle.name} view ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Side */}
          <div className="modal-details">
            <span className={`vehicle-badge ${vehicle.categoryStyle}`}>
              {vehicle.category}
            </span>
            <h2 className="modal-vehicle-name">{vehicle.name}</h2>

            <div className="modal-price-block">
              <span className="modal-price-amount">{vehicle.price}</span>
              <span className="modal-price-note">{vehicle.priceNote}</span>
            </div>

            <div className="modal-specs-row">
              <div className="modal-spec-item">
                <span className="material-symbols-outlined">person</span>
                <span>{vehicle.passengers}</span>
              </div>
              <div className="modal-spec-item">
                <span className="material-symbols-outlined">luggage</span>
                <span>{vehicle.luggage}</span>
              </div>
              {vehicle.specs?.airConditioning && (
                <div className="modal-spec-item">
                  <span className="material-symbols-outlined">ac_unit</span>
                  <span>Air Conditioned</span>
                </div>
              )}
              {vehicle.specs?.wifi && (
                <div className="modal-spec-item">
                  <span className="material-symbols-outlined">wifi</span>
                  <span>Free Wi-Fi</span>
                </div>
              )}
            </div>

            <div className="modal-section">
              <h4 className="modal-section-title">Features</h4>
              <div className="modal-features-grid">
                {vehicle.features.map((feature, i) => (
                  <div key={i} className="modal-feature-item">
                    <span className="material-symbols-outlined">check_circle</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {vehicle.recommendedFor && vehicle.recommendedFor.length > 0 && (
              <div className="modal-section">
                <h4 className="modal-section-title">Recommended For</h4>
                <div className="modal-tags">
                  {vehicle.recommendedFor.map((tag, i) => (
                    <span key={i} className="modal-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <p className="modal-suitable">{vehicle.suitableFor}</p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp modal-cta-whatsapp"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us for Booking
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleModal;
