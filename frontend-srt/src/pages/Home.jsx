import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import './Home.css';

const Home = () => {
  return (
    <>
      <Header />
      
      {/* 2. Hero Section */}
      <section className="hero-section">
        <div className="hero-bg">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWtAR8jySi12tkOO6AeFCpVoCO2qHC7LIxaXO-x6eZfhvja4QN7GVu-k8TFoQLUw3oTQJquPjBB4NB-ehxUZqhxNblxaborhRxYBuBjJpYlC-WSvDdk4F9kqtCvZIj0WMXvcGHuOvFzmICJ1okmxNRQm6jgs7pcR06l0PIFbgT9V1Xl7y150bcV5rBWgXOLHEwXI4GxjFCfvAS3d9TzgxUffhcrreqUDAz5TBtmhc-MVC5Fd-jrMj4TAJvqXa83I6H9ZEsh3rYLBw" 
            alt="Sigiriya" 
            className="hero-img"
          />
          <div className="hero-scrim"></div>
        </div>
        
        <div className="container hero-content relative">
          <div className="hero-text">
            <p className="hero-subtitle">From Ancient Wonders to Golden Beaches</p>
            <h1 className="hero-title">Unveil the Soul of the Resplendent Isle</h1>
            <Button variant="primary" className="hero-btn">Plan My Trip</Button>
          </div>
        </div>

        {/* Floating Thumbnails */}
        <div className="floating-thumbnails">
          <div className="thumb-1">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMKM2oJBTGF7G1IQPyonQSSKoLgyE8VwX5_C66EltY3Xxi3mOzlbV1VRFgpZiTw-xBH-GXlW9ZflO5RBSlAyvMx9Sft_FusYn-hgwOeb0f4lwWXM_7Offr6ZfAbNYyE_XCD49bBFcMykIXPm6-dp79vFdiLiuw4DZwPith3iZ_OaRbYAQEfp5ZX277P7hTw2VedV7P7oe5vb00Rla2uFB_Zs3m1OXL7uFupf0iJv4renlVd9pjecYP-sZoUUGDz5RDqHTz7rX0_rU" alt="Stilt Fisherman" />
          </div>
          <div className="thumb-2">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNViPliZgMATp8rJwfOfe5IbM1qX0v0GifmydP8iYBCnIu-ZkCL815eORxjyDnpji9vt7wpv01XEeT4xOyVGfUKekMFDzsUU25irJumcPci176H9SkaJe_iVeVM94PybczQdFuMcPYXNjbBNygV3w2leoL5C7r2uE_HFdtgfqRTpGfvy9XXF5B6trvU25IrzYFC9drxMHMs0Y5m4lvl8oWzQMwcXxWIZk8PG0eKBs2a41NSM7a2ddLmas2esFbs0GODyAT1zGc9i8" alt="Nine Arch Bridge" />
          </div>
          <div className="thumb-3">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI8lQMaZHzZB2fbkE3R7GqbhHWcKRuA0SK5xZiykQ_JMOEC7TtLLokTE_NgmsKUZWynxbgt7jZZoQ1Q3okYkKQAAKe-Ly2f61bZ0WDthSVK5-95YWz7GEsaYsNUBWjGECuBGwA-bxEg6S7OyJvDzsGFfnMdtv3wHsZ19LHS35ckniA4ajplTyl2p0IO0vE-7CrSJd07qexUpXLNid90oy8hUMwTvsBzUyonL9MVOCssmEcJBqZyW6ZL6_ortWsbjVpyJh0U2QAOv0" alt="Infinity Pool" />
          </div>
        </div>
      </section>

      {/* 3. About Section */}
      <section className="about-section container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvanpekF-x-33aj3PdV0wtOksNC3PtFlLpJwrV1Sv-VL3frjNmSWFjOAs5UCErrfbzInYeWg9iiGTn5DzE2wzNY2a6aweMBhnU91-tT1BlysJCInxKhxVNr7BLwBZeQ44lu52HuaWQKDIg-WcEgczboMbZbVw6VOSoXzBHWjGNGc63HabOhoOsgvOMHIgG8ePCWSgSKnizliNw9e1oQSK90AoPrcIhrQhsDQ6GDg0zRreFmXQHVF2jRlY0X50c8MnuI_A8eTuwllg" alt="Travel Curator" className="about-img"/>
            <div className="experience-stamp">
              <p>Founded<br/><span>2013</span><br/>Experience</p>
            </div>
          </div>
          <div className="about-content">
            <span className="story-badge">Our Story</span>
            <h2 className="about-title">Curating Extraordinary Journeys Since 2013</h2>
            <p className="about-text">We don't just book trips; we craft personal narratives. Born from a passion for the hidden corners of Sri Lanka, Ceylon Journeys bridge the gap between authentic local immersion and uncompromising luxury.</p>
            
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <span className="material-symbols-outlined">explore</span>
                </div>
                <h4>Expert Guidance</h4>
                <p>Deep local knowledge and curated routes that avoid the crowds.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <span className="material-symbols-outlined">support_agent</span>
                </div>
                <h4>Elite Support</h4>
                <p>Concierge-level assistance available 24/7 during your journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="why-us-section">
        <div className="container">
          <div className="section-header">
            <h2>The Ceylon Journeys Standard</h2>
            <div className="divider"></div>
          </div>
          <div className="why-us-grid">
            {[
              { icon: 'history_edu', title: '10+ Years Excellence', desc: 'A decade of perfecting the art of Sri Lankan hospitality and logistics.' },
              { icon: 'verified', title: 'Fully Licensed', desc: 'Accredited by the Sri Lanka Tourism Development Authority (SLTDA).' },
              { icon: 'auto_fix_high', title: 'Customized Tours', desc: 'No templates. Every itinerary is built from scratch around your desires.' },
              { icon: 'record_voice_over', title: 'English Guides', desc: 'Expert storytellers fluent in English and deep historical context.' },
              { icon: 'alarm', title: '24/7 Assistance', desc: 'Always a phone call away for any requests or adjustments on the go.' },
              { icon: 'business_center', title: 'Professionalism', desc: 'Elite vehicle fleet and meticulously vetted hotel partners.' },
            ].map((item, idx) => (
              <div className="why-card" key={idx}>
                <span className="material-symbols-outlined why-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 5. Featured Packages / Top Destinations */}
      <section className="featured-packages container">
        <div className="featured-header">
          <div>
            <span className="featured-subtitle">Top Destination</span>
            <h2>Signature Journeys</h2>
          </div>
          <a href="#" className="view-all-link">View All Packages</a>
        </div>
        
        <div className="packages-grid">
          {[
            {
              title: "Hill Country Romance",
              duration: "7 Days",
              desc: "Experience the mist-veiled tea estates of Nuwara Eliya and the spiritual heart of Kandy.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBapGOCIs4XNarssnn3HciSYg62IfKRnVyPuMbhmKHlKyu68XeCvM9_N5rXADVTwj2qkP9b8k0pzOVNYVd8Jf-08aiVlkcdFq_VFbZwWs2M6-_EdC4MD6lbSjmJwCO69Oo1siJzlPn0jcnrjwOfiN-ai5QGhWXl95fJJ_t2jkMXP4T1Uw-Bt11-X4-b9PqDwf9b2RkRWfr8MTtmrztw5cySpwc0kYxJSKf-mJ0jtzIjeB6pCBg7YP6cfnFZiAR90xlBAcT2dRxMQU0"
            },
            {
              title: "Wild Sri Lanka Safari",
              duration: "10 Days",
              desc: "Venture into the heart of Yala and Wilpattu for leopard sightings and wild elephants.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCDWi1Y4G6Jo_o78Mr02CWjsCWF71NK75JApxk592EZW76nG_9UV5hCvH6D20Ra_s-fDlJYIwuqba0PQSIZjm7F3LtIA-wd7tMgQJM8AO3TajTCmz1Ck8uYS6dfdd4WSpMGaE2rEXrqMT23Prg2UwjwjzMQ92iLF5VT07a4CVorBk-bRayIfU-m-F6jnMUddvMTkx7Z_mfeUXy1HD-y3qLOms9SNsV62ThPsxN_5Kwa3CVC9LnkJDw3kLXp-m4laQ8TZJrqnN7ZL0"
            },
            {
              title: "Southern Coastal Escape",
              duration: "5 Days",
              desc: "Golden sands, colonial architecture in Galle, and whale watching in Mirissa.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8A0SV3DZ6-31zO9HFjz6aesPB3B5fdGKAQaQe26LUNNHweHJSmpaInfiISFtaXoWeanxlzIH7RqzP6_UyPjy70hUhUdjFlnf7VwCPJvf1NAZiL2Ej3OZPJSwazKEfFQlfIae5-R0pi_LYQ3bMDyVGHmK8y5akOb40i6t6-E9tcuivpjLbbiJiNBpw7UhkpStdSpVMEBq3O_iV9w7BN8yJGPWPqMcg4IvfrVMi2_BmBh7PXe7sK9Iuxpjg651rdVdAgNcIHBOl8qQ"
            },
            {
              title: "Cultural Triangle Grandeur",
              duration: "12 Days",
              desc: "An in-depth journey through Anuradhapura, Polonnaruwa, and Sigiriya's legacy.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvHa75MGGPVAmjvZFSjLCah-YX3IXgYIbMgHJpJiQrDzqW1f-O9PgGYy6nE4RiMj3VvvOXR5o4vsm0d21yfSy6LIxUd2w9LxHQJ15OfJCKcpcm9F4r0Xp1tzPmWSzwssM16icQHH2IfW_SjqC2W4NU_ZsbTiwFsxgMjRtm71e56fbw0gXyOScSDYc8X0EB5HcKw4Ad8BjH5Hzrmge4hiOykAfTE003K5oGGgQ9np3R_SQNu6NRu4K5QuelQpFSjt3JmK29LFMGKSo"
            }
          ].map((pkg, idx) => (
            <div className="package-card" key={idx}>
              <div className="package-img-wrapper">
                <img src={pkg.img} alt={pkg.title} className="package-img" />
                <div className="package-duration">{pkg.duration}</div>
              </div>
              <h3 className="package-title">{pkg.title}</h3>
              <p className="package-desc">{pkg.desc}</p>
              <button className="package-book-btn">Book Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* 9. CTA Banner */}
      <section className="cta-section container">
        <div className="cta-banner">
          <h2 className="cta-title">Ready to Design Your Perfect Sri Lanka Holiday?</h2>
          <p className="cta-text">Connect with our luxury travel curators for a personalized consultation and a bespoke itinerary designed around your travel style.</p>
          <div className="cta-actions">
            <Button variant="secondary" className="cta-btn-1">Plan My Custom Tour</Button>
            <Button variant="white" className="cta-btn-2">Call Our Experts</Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
