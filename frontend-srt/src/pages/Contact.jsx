import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <Header />
      
      <section className="contact-hero">
        <div className="contact-hero-bg">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8A0SV3DZ6-31zO9HFjz6aesPB3B5fdGKAQaQe26LUNNHweHJSmpaInfiISFtaXoWeanxlzIH7RqzP6_UyPjy70hUhUdjFlnf7VwCPJvf1NAZiL2Ej3OZPJSwazKEfFQlfIae5-R0pi_LYQ3bMDyVGHmK8y5akOb40i6t6-E9tcuivpjLbbiJiNBpw7UhkpStdSpVMEBq3O_iV9w7BN8yJGPWPqMcg4IvfrVMi2_BmBh7PXe7sK9Iuxpjg651rdVdAgNcIHBOl8qQ" 
            alt="Contact Hero" 
          />
          <div className="hero-scrim"></div>
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="hero-title">Contact Our Travel Experts</h1>
          <p className="hero-subtitle text-white">Let us design your bespoke journey</p>
        </div>
      </section>

      <section className="contact-content container">
        <div className="contact-grid">
          
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p className="contact-intro">Whether you have a fully formed itinerary or just a spark of inspiration, our curators are ready to bring your Sri Lankan dream to life.</p>
            
            <div className="contact-details">
              <div className="contact-detail-item">
                <span className="material-symbols-outlined icon">location_on</span>
                <div>
                  <h4>Head Office</h4>
                  <p>45 Heritage Square, Galle Fort,<br/>Sri Lanka</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <span className="material-symbols-outlined icon">call</span>
                <div>
                  <h4>Phone</h4>
                  <p>+94 11 234 5678</p>
                  <p className="text-sm">Available 24/7 for our guests</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <span className="material-symbols-outlined icon">mail</span>
                <div>
                  <h4>Email</h4>
                  <p>concierge@ceylonjourneys.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <h3>Start Planning</h3>
              <Input label="Full Name" placeholder="Jane Doe" required />
              <Input label="Email Address" type="email" placeholder="jane@example.com" required />
              <Input label="Phone Number" type="tel" placeholder="+1 234 567 8900" />
              <div className="input-row">
                <Input label="Arrival Date" type="date" />
                <Input label="Duration (Days)" type="number" min="1" placeholder="7" />
              </div>
              <Input label="Tell us about your dream trip" type="textarea" placeholder="I'm interested in wildlife and heritage sites..." required />
              <Button variant="primary" type="submit" className="w-full">Submit Request</Button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
