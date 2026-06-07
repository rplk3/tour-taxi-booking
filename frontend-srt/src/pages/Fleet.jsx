import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import './Fleet.css';

const Fleet = () => {
  const [activeTab, setActiveTab] = useState('Premium Sedans');

  const tabs = ['Premium Sedans', 'Luxury SUVs', 'Family Vans', 'Mini Coaches'];

  return (
    <>
      <Header />
      
      <main className="fleet-page-main">
        {/* Hero Section */}
        <section className="new-fleet-hero">
          <div className="new-fleet-hero-bg">
            <img 
              src="https://lh3.googleusercontent.com/aida/ADBb0ujmqtVSVcvXXiJZXz4PaguGccAeBoMK3EtU0H7WLBDTZC0CCOvvOQzjiqVzODHXu9bYLrrOSuves2TMVTMMnlOYCT6Fhl9bhq0OlLZ6sByWBB4kXd-WHSZ3cwyMDtfPPRVWE0mgidN__bBVZGQ6gSuS5s1RRgVO6ITq7pU-qoF7rk2fWmBVUVLlbfuafYDPL2HvsgX6KWim3OYrtGX_qxyYi0K7eraZRw2lG4Z5VP-kum72pjg8ZeGQwQ" 
              alt="Fleet Hero" 
            />
            <div className="new-hero-scrim"></div>
          </div>
          <div className="container relative z-10">
            <div className="new-hero-content">
              <h1>The Ceylon Journeys Fleet</h1>
              <p>Travel Sri Lanka in absolute comfort and style. From premium sedans to executive coaches, your journey begins with the perfect vehicle.</p>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="stats-strip">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Vehicles</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">17+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Islandwide Coverage</span>
              </div>
            </div>
          </div>
        </section>

        {/* Fleet Filter & Grid */}
        <section className="fleet-filter-section">
          <div className="container">
            <div className="filter-header">
              <h2>Choose Your Travel Class</h2>
              <div className="tabs-container no-scrollbar">
                {tabs.map((tab) => (
                  <button 
                    key={tab}
                    className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="new-fleet-grid">
              {/* Card 1 */}
              <div className="new-fleet-card group">
                <div className="card-img-wrap">
                  <img src="https://lh3.googleusercontent.com/aida/ADBb0uiSsPVSjb9VAF0b44X0FhBfZOiVvT9uhMLrp60w_F2p6CheBnGFoei2-0J_1wgmBpnc6r6f5b3yCo3NN88Y9SV2TVAn9YjKZEvZKd_puQgfq2MFl57iHJzdYNoFKWr0XvO7_dhtjDlM1Fthv03bAIRAIqRuSmTM26kQZs23-wOwHLZLL5AkFjTXC0Qx0RrObwTEitbfko4bA3PosqgQWlhLnl-GTk-Tkd1GxEulylOrpmVgM2wffxpQgw" alt="Toyota Premio" />
                  <span className="card-badge badge-primary">Premium</span>
                </div>
                <div className="card-content">
                  <h3>Toyota Premio</h3>
                  <div className="card-specs">
                    <div className="spec-item">
                      <span className="material-symbols-outlined">person</span>
                      <span>3 Pax</span>
                    </div>
                    <div className="spec-item">
                      <span className="material-symbols-outlined">luggage</span>
                      <span>2 Large</span>
                    </div>
                  </div>
                  <button className="btn-outline-primary w-full">Request Quote</button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="new-fleet-card group">
                <div className="card-img-wrap">
                  <img src="https://lh3.googleusercontent.com/aida/ADBb0ui5QdB4rl-SbJYsEwMmF759Xk4kkFfIpvnTblcYB0atMOQD3QRFXLF4bZiLLVCckzjE1OIyLJH9vef26BprRAM1vdaIu4keLog7XzTazC-U8qxwSENdmGvyEv0cEntENFjWYQi_8ek-7_pGts5RLG3TYi9ka-HOiqVNTzL9pNHYW6OYOKO_DIVECdTzgSSTcBF1HXuZb55JCXMCWZbql6K0DXhzwM00t3SqRO5kRGwfqDHD9xY-uYFVHOc" alt="Kia Sorento" />
                  <span className="card-badge badge-secondary">Luxury</span>
                </div>
                <div className="card-content">
                  <h3>Kia Sorento</h3>
                  <div className="card-specs">
                    <div className="spec-item">
                      <span className="material-symbols-outlined">person</span>
                      <span>4 Pax</span>
                    </div>
                    <div className="spec-item">
                      <span className="material-symbols-outlined">luggage</span>
                      <span>3 Large</span>
                    </div>
                  </div>
                  <button className="btn-outline-primary w-full">Request Quote</button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="new-fleet-card group">
                <div className="card-img-wrap">
                  <img src="https://lh3.googleusercontent.com/aida/ADBb0uiHCIyGFwVETGfwX9CaMBPc6yA-zOaaK7y1NxcQvcXm_AUHfJCBqMW88HAjm1RD4z4M4ZG7Uo3-dPY0fh-FRAVtnO2s96BPZKpReeA5Hr-UQ9MIu-sVLnuFcRb5S76ErRcTr97TBKgZpbgzYDqNL0DoB1h8NvOFSp1iTdYR0skmxG4OsCiKbY6yqTZ5Z6iksPx4mIScm-dUUtA8JAEKZFTIuHlwwb7lc7pC0YTgGgpds_Rnj9jmjJ1EKlw" alt="Toyota KDH Van" />
                  <span className="card-badge badge-tertiary">Family</span>
                </div>
                <div className="card-content">
                  <h3>Toyota KDH Van</h3>
                  <div className="card-specs">
                    <div className="spec-item">
                      <span className="material-symbols-outlined">group</span>
                      <span>6-10 Pax</span>
                    </div>
                    <div className="spec-item">
                      <span className="material-symbols-outlined">luggage</span>
                      <span>5 Large</span>
                    </div>
                  </div>
                  <button className="btn-outline-primary w-full">Request Quote</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Fleet;
