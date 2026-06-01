import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import './Fleet.css';

const Fleet = () => {
  return (
    <>
      <Header />
      
      <section className="fleet-hero">
        <div className="fleet-hero-bg">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8A0SV3DZ6-31zO9HFjz6aesPB3B5fdGKAQaQe26LUNNHweHJSmpaInfiISFtaXoWeanxlzIH7RqzP6_UyPjy70hUhUdjFlnf7VwCPJvf1NAZiL2Ej3OZPJSwazKEfFQlfIae5-R0pi_LYQ3bMDyVGHmK8y5akOb40i6t6-E9tcuivpjLbbiJiNBpw7UhkpStdSpVMEBq3O_iV9w7BN8yJGPWPqMcg4IvfrVMi2_BmBh7PXe7sK9Iuxpjg651rdVdAgNcIHBOl8qQ" 
            alt="Fleet Hero" 
          />
          <div className="hero-scrim"></div>
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="hero-title">Our Premium Fleet</h1>
          <p className="hero-subtitle text-white">Travel in Comfort and Style</p>
        </div>
      </section>

      <section className="fleet-section container">
        <div className="section-header">
          <h2>Select Your Vehicle</h2>
          <div className="divider"></div>
        </div>
        
        <div className="fleet-grid">
          {[
            { name: 'Luxury Sedan', img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600', capacity: '3 Passengers', desc: 'Perfect for couples or small families seeking supreme comfort.' },
            { name: 'Premium SUV', img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=600', capacity: '5 Passengers', desc: 'Spacious and powerful, ideal for longer journeys and hilly terrains.' },
            { name: 'Executive Van', img: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&q=80&w=600', capacity: '8 Passengers', desc: 'Generous space for larger groups with ample luggage capacity.' }
          ].map((vehicle, idx) => (
            <div className="fleet-card" key={idx}>
              <div className="fleet-card-img">
                <img src={vehicle.img} alt={vehicle.name} />
              </div>
              <div className="fleet-card-content">
                <h3>{vehicle.name}</h3>
                <div className="capacity">
                  <span className="material-symbols-outlined">group</span>
                  <span>{vehicle.capacity}</span>
                </div>
                <p>{vehicle.desc}</p>
                <Button variant="primary">Book This Vehicle</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Fleet;
