import React, { useState, useRef } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import './Fleet.css';

const Fleet = () => {
  const [activeTab, setActiveTab] = useState('Premium Sedans');
  const scrollerRef = useRef(null);

  // For horizontal scroll (slider)
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    if (!scrollerRef.current) return;
    setStartX(e.pageX - scrollerRef.current.offsetLeft);
    setScrollLeft(scrollerRef.current.scrollLeft);
  };
  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);
  const handleMouseMove = (e) => {
    if (!isDown || !scrollerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollerRef.current.scrollLeft = scrollLeft - walk;
  };

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

        {/* Why Choose Our Fleet Section */}
        <section className="why-choose-section">
          <div className="container">
            <div className="why-choose-grid">
              <div className="why-choose-image-container">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSHC-CZOj6zqaWig-FdQGW8kTyAt6SfTuanR9GkLDrOAhQrT8STHPpXHVCWXk4K_sS0b2J1FEBHS_H_g6CLtc0t2uzt9f5z0Y8YrPmVhPcrgdmvDxNP_iA9PKiB0XriKJP-89s6_zBxcsxiVIeLKLkedaqIELdvUEwFLWm_lpSI9W1w5f4QX4nNUcvSHDR--rGnA_vSh8KrhuHHjfwn2Fcmv2Cx1tTDfnqJcftF1YL5vggc_uua86lQz3JipWU6467zYZ08Iegx9E" 
                  alt="Professional chauffeur" 
                  className="why-choose-img"
                />
                <div className="why-choose-badge hidden-mobile">
                  <p>Superior <br/>Standards</p>
                </div>
              </div>
              <div className="why-choose-content">
                <span className="section-subtitle">The Ceylon Difference</span>
                <h2>Uncompromising Standards of Excellence</h2>
                <ul className="features-list">
                  <li>
                    <span className="material-symbols-outlined icon-primary">verified</span>
                    <div>
                      <h4>Fully Insured & Maintained</h4>
                      <p>Every vehicle undergoes rigorous multi-point safety inspections monthly.</p>
                    </div>
                  </li>
                  <li>
                    <span className="material-symbols-outlined icon-primary">share_location</span>
                    <div>
                      <h4>GPS & Real-time Tracking</h4>
                      <p>Stay connected and safe with integrated GPS monitoring across the island.</p>
                    </div>
                  </li>
                  <li>
                    <span className="material-symbols-outlined icon-primary">stars</span>
                    <div>
                      <h4>Professional Chauffeurs</h4>
                      <p>English-speaking, background-checked experts with deep local knowledge.</p>
                    </div>
                  </li>
                  <li>
                    <span className="material-symbols-outlined icon-primary">wifi</span>
                    <div>
                      <h4>Complimentary Amenities</h4>
                      <p>Bottled water, wet towels, and high-speed Wi-Fi available on all journeys.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Spotlight */}
        <section className="featured-spotlight">
          <div className="spotlight-bg">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDez19qb6w5fLIGpZnFwPYtCoHB9Rj1A6s1uBMSkroQvh3BNIYBMlYxO6w4kym2Tk0ZUQ8uOvyL_fnBa0Uqy9gSuJ5DKicUJ9Bjd4gSiGsMJNvUQv3w9TBL3z-tsbyuVYJUlgi9aXwUjl2lJelUKw__uZHXmaPem8__3m6XBhmxCU_-WHcE2wChANNyOGXc7nc5bqQ4mZgdoG_xqBZoNKugpFKYmlByDiryTlzNryu6GhZX1raX8E3F3mt1FHpk0OtwWZVaWyMMzow" 
              alt="Executive SUV interior" 
            />
            <div className="spotlight-scrim"></div>
          </div>
          <div className="container relative z-10 text-center spotlight-content">
            <h2>Experience Ultimate Privacy</h2>
            <p>Our VIP executive fleet offers sound-proofed cabins and tinted windows for the high-profile traveler who values discretion and silence above all else.</p>
            <button className="btn-secondary-solid">Book Executive Fleet</button>
          </div>
        </section>

        {/* Experience Gallery Slider */}
        <section className="gallery-section">
          <div className="container">
            <h2>Moments in Motion</h2>
          </div>
          <div 
            className="gallery-slider no-scrollbar"
            ref={scrollerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className="gallery-slide">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn7oLKrauQxIc3J2dXjZSg0BgoV_l3sU8e31K_Ag0ku9QK7p4_ldcAS-bylie2a5ysHtNYgYTUf50v62yL91AHd7HvPXy6y3-9KADb6SL9QKR8lDsbfw6prreraP6JsBpcHTbonDzJ8iy2D5Pm_NnjAxu84eSUMxofK3uYRUqyOWLJg2E83Z38TLJrO2-SxKzRZzZ3SMAPPgyZzderwm2PKmHSH9hT2cT45WXCcN2po0mfN54K23jfL23sUTMTwHHH-N_s-rcZt6A" alt="Tea plantations" />
            </div>
            <div className="gallery-slide">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVKRnp4Fpz9ZEyHy3VQZj-S35oNFGUKEDEzbE_UcuBRCUIk9-uy8-E-5iBxtlKyvmhFIXMpV1mkbPM6Jmn8I5xE6loxawteMk57T-PLsxXbgVD3zaJrfU6ZNAv4biv7tdXOJYHpUepf1Qbzz89Dy4JbxuARN3n_JBxFqKbDk8zHVEI6DX5jBpnRkB1BecryUpa9kk8uKBGF0HHkECfO3QSOjQHefu6ZCKBjKAFC0vaMxhjmdWl2W4KHlcOf8AyiV7XB1Zqn5fvP3I" alt="Beach road" />
            </div>
            <div className="gallery-slide">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCokB0f06cww14Pza7QbeUUxgudnih2eG449YaOxCrvan8my4txGw0T_lnc5qTMcc3ek1a79txkJzuN65jsQzC7TmxzTCTtjeQjaMtep2dhxS-4Yv3X4qlzYsDrj34Cgc4xZukmeG4eRT3HY_GosN01Ltow7H0DjInSrCuFansOprIpoA2uiNdpUpctaLIBkUHbyy7Wu5yWMWwwa2hnU31Qpp0bSzqKnW-xmF9o1XZq_YKu2TlMpQGmtuUm-sCjlYPnslwGrxl43xk" alt="Sigiriya" />
            </div>
            <div className="gallery-slide">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDCG8QpYoLnv6JgsmeKsXT9erWpqXrlayBmrsGBK0xZs4ucasStnu3z8gELM_rpKv_D_00iz1Yppr5qtCslnh1azsI6tKUfLN1HRlTypJZ_aIZF7a6pkZwQ7tswAOhfCj4bWF03nc832JJCvgcY2Cw-nRhn87F8-aUR27-De1mB85gwKdarwxDvZK1Y9t_3_sVfLj96S4X2jFIgdLGmicqAFCNKi0qhAHeL1tdYf_Z2_xW8HwWzg4679MotvEvclY2waZTjs2WghA" alt="Colombo lagoon" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Fleet;
