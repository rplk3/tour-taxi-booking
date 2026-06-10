import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import VehicleCard from '../components/ui/VehicleCard';
import VehicleModal from '../components/ui/VehicleModal';
import './Fleet.css';

/* ─── Vehicle Data ─── */
const vehiclesData = [
  {
    id: 'toyota-prius',
    name: 'Toyota Prius',
    category: 'Economy',
    categoryStyle: 'badge-economy',
    price: '$55',
    priceNote: 'per day · unlimited km',
    image: '/Toyota-Prius.png',
    description: 'A fuel-efficient hybrid sedan, air-conditioned with capacity of 3 passengers, ideal for budget-friendly transfers and city tours.',
    passengers: 'Up to 3',
    luggage: '2 Large',
    features: ['Air Conditioned', 'Comfortable Seating', 'Professional Driver', 'Fuel Efficient', 'USB Charging'],
    suitableFor: 'Ideal for couples, solo travelers, and budget-friendly city transfers.',
    specs: { airConditioning: true, wifi: false, chargingPorts: true, childSeat: true },
    gallery: [],
    recommendedFor: ['City Tours', 'Airport Transfers', 'Budget Travel'],
  },
  {
    id: 'honda-vezel',
    name: 'Honda Vezel',
    category: 'Compact SUV',
    categoryStyle: 'badge-compact',
    price: '$65',
    priceNote: 'per day · unlimited km',
    image: '/Honda-Vezel.png',
    description: 'A modern compact SUV, air-conditioned with capacity of 4 passengers, ideal for comfortable family trips and hill country tours.',
    passengers: 'Up to 4',
    luggage: '2 Large',
    features: ['Air Conditioned', 'Comfortable Seating', 'Professional Driver', 'USB Charging', 'Child Seat Available'],
    suitableFor: 'Great for small families and couples who enjoy extra space and comfort.',
    specs: { airConditioning: true, wifi: false, chargingPorts: true, childSeat: true },
    gallery: [],
    recommendedFor: ['Family Tours', 'Airport Transfers', 'Hill Country Trips'],
  },
  {
    id: 'toyota-axio',
    name: 'Toyota Axio',
    category: 'Economy',
    categoryStyle: 'badge-economy',
    price: '$55',
    priceNote: 'per day · unlimited km',
    image: '/Toyota-Axio.png',
    description: 'A reliable economy sedan, air-conditioned with capacity of 3 passengers, ideal for airport transfers and business travel.',
    passengers: 'Up to 3',
    luggage: '2 Large',
    features: ['Air Conditioned', 'Comfortable Seating', 'Professional Driver', 'Bottled Water'],
    suitableFor: 'Perfect for business travelers and budget-conscious visitors.',
    specs: { airConditioning: true, wifi: false, chargingPorts: false, childSeat: true },
    gallery: [],
    recommendedFor: ['Business Travel', 'City Tours', 'Airport Transfers'],
  },
  {
    id: 'toyota-premio',
    name: 'Toyota Premio',
    category: 'Premium',
    categoryStyle: 'badge-premium',
    price: '$70',
    priceNote: 'per day · unlimited km',
    image: '/Toyota-Premio.png',
    description: 'A premium luxury sedan, air-conditioned with capacity of 3 passengers, offering maximum comfort for private tours.',
    passengers: 'Up to 3',
    luggage: '2 Large',
    features: ['Air Conditioned', 'Comfortable Seating', 'Professional Driver', 'Bottled Water', 'USB Charging'],
    suitableFor: 'Ideal for business professionals and premium travelers who value comfort.',
    specs: { airConditioning: true, wifi: false, chargingPorts: true, childSeat: true },
    gallery: [],
    recommendedFor: ['Business Travel', 'Airport Transfers', 'Private Tours'],
  },
  {
    id: 'toyota-kdh-van',
    name: 'Toyota KDH Van',
    category: 'Family',
    categoryStyle: 'badge-family',
    price: '$100',
    priceNote: 'per day · unlimited km',
    image: 'Toyota-KDH.png',
    description: 'A comfortable passenger van, air-conditioned with capacity of 8 passengers, perfect for family tours and small group excursions.',
    passengers: 'Up to 8',
    luggage: '5 Large',
    features: ['Air Conditioned', 'Comfortable Seating', 'Professional Driver', 'Bottled Water', 'Spacious Interior'],
    suitableFor: 'Ideal for families, small groups, and airport transfers.',
    specs: { airConditioning: true, wifi: false, chargingPorts: false, childSeat: true },
    gallery: [],
    recommendedFor: ['Family Tours', 'Airport Transfers', 'Group Excursions'],
  },
  {
    id: 'toyota-hiace-high-roof',
    name: 'Toyota High Roof',
    category: 'Family',
    categoryStyle: 'badge-family',
    price: '$110',
    priceNote: 'per day · unlimited km',
    image: '/Toyota-Highroof.png',
    description: 'A full sized van, air conditioned with capacity of 9 passengers ideal for long distance trips',
    passengers: 'Up to 10',
    luggage: '6 Large',
    features: ['Air Conditioned', 'Comfortable Seating', 'Professional Driver', 'Bottled Water', 'Extra Headroom', 'USB Charging'],
    suitableFor: 'Best for larger families and groups needing extra luggage space and headroom.',
    specs: { airConditioning: true, wifi: false, chargingPorts: true, childSeat: true },
    gallery: [],
    recommendedFor: ['Family Tours', 'Group Excursions', 'Long Distance Travel'],
  },
  {
    id: 'mini-coach',
    name: 'Mini Coach',
    category: 'Group',
    categoryStyle: 'badge-group',
    price: '$180',
    priceNote: 'per day · unlimited km',
    image: '/Mini-Coaster.png',
    description: 'A spacious mid-sized mini coach, air-conditioned with capacity of 20 passengers, ideal for large families and team outings.',
    passengers: 'Up to 20',
    luggage: '10 Large',
    features: ['Air Conditioned', 'Comfortable Seating', 'Professional Driver', 'Bottled Water', 'PA System', 'Large Luggage Bay'],
    suitableFor: 'Suitable for medium groups, team outings, and wedding parties.',
    specs: { airConditioning: true, wifi: false, chargingPorts: false, childSeat: false },
    gallery: [],
    recommendedFor: ['Group Tours', 'Team Outings', 'Wedding Parties', 'Pilgrimages'],
  },
  {
    id: 'large-coach-bus',
    name: 'Large Coach Bus',
    category: 'Group',
    categoryStyle: 'badge-group',
    price: '$250',
    priceNote: 'per day · unlimited km',
    image: '/Yutong-C12.png',
    description: 'A large executive touring coach, air-conditioned with capacity of 45 passengers, best for large tour groups and events.',
    passengers: 'Up to 45',
    luggage: '20+ Large',
    features: ['Air Conditioned', 'Reclining Seats', 'Professional Driver', 'Bottled Water', 'PA System', 'Large Luggage Bay', 'USB Charging'],
    suitableFor: 'Best for large tour groups, conferences, and corporate events across Sri Lanka.',
    specs: { airConditioning: true, wifi: true, chargingPorts: true, childSeat: false },
    gallery: [],
    recommendedFor: ['Large Group Tours', 'Conferences', 'Corporate Events', 'Island Tours'],
  },
];

const Fleet = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  return (
    <>
      <Header />

      <main className="fleet-page-main">
        {/* Hero Section */}
        <section className="new-fleet-hero">
          <div className="new-fleet-hero-bg">
            <img
              src="/fleet-bg.png"
              alt="Fleet Hero"
            />
            <div className="new-hero-scrim"></div>
          </div>
          <div className="container relative z-10">
            <div className="new-hero-content">
              <h1>Our Vehicle Fleet</h1>
              <p>Travel Sri Lanka in absolute comfort and style. From premium sedans to executive coaches, your journey begins with the perfect vehicle.</p>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="stats-strip relative z-10">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Vehicles</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">17+</span>
                <span className="stat-label">Years</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Islandwide</span>
              </div>
            </div>
          </div>
        </section>

        {/* Fleet Grid */}
        <section className="fleet-grid-section">
          <div className="container">
            <div className="fleet-section-header">
              <h2>Choose Your Vehicle</h2>
              <p>Browse our complete fleet of 9 vehicles - from economy sedans to luxury coaches.</p>
            </div>

            <div className="fleet-vehicle-grid">
              {vehiclesData.map((vehicle) => (
                <VehicleCard
                  key={vehicle.id}
                  vehicle={vehicle}
                  onViewDetails={setSelectedVehicle}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Vehicle Details Modal */}
      {selectedVehicle && (
        <VehicleModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
        />
      )}
    </>
  );
};

export default Fleet;
