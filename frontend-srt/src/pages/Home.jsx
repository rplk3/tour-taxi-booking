import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import './Home.css';

const Home = () => {
  useEffect(() => {
    // Simple micro-interaction for stats counting
    const stats = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-pulse');
        }
      });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      {/* 1. Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-bg">
          <video 
            className="about-hero-video"
            autoPlay
            loop
            muted
            playsInline
            poster="https://lh3.googleusercontent.com/aida-public/AB6AXuA7n7dB47X4aB4_pOwfg1xF5-jOa8rbxKw1sMZYC_do1IdHuoVYlZdRqHBmOGSXfFKKsTXa6JqHmIn5K4Ab2zt8PWq6nuqUzf2_MCYInEIeViUizep2AYps_-yn-e-MOPdJ8kc8cCBqS9Avf0g-2YoBiDOQVHAl_QwAHK_pxtOKIzMSRzFodGvQJ2_g7ek-CsblRApMjsCeNJBq3hhrGSK9T4S6qGAXwHUwIFjw2pw7uSCZNAVt1z_iQ8g3pQ_RL8hz2284Jd2j9u0"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-tea-plantation-in-sri-lanka-from-above-41582-large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="about-cinematic-overlay"></div>
        </div>

        <div className="container about-hero-content relative">
          <div className="about-hero-text">
            <span className="about-hero-subtitle">More Than a Tour Company</span>
            <h1 className="about-hero-title">Creating Meaningful Sri Lanka Journeys </h1>
            <p className="about-hero-desc">We believe travel should be personal, authentic, and unforgettable. Our mission is to guide you through the soul of Sri Lanka with elegance and local insight.</p>
            <div className="about-hero-actions">
              <Button variant="primary">Plan Your Journey</Button>
              <button className="btn-outline-white">Explore Our Tours</button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="story-section container">
        <div className="story-grid">
          <div className="story-image-wrapper">
            <div className="story-badge-founded">Founded in 2013</div>
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDscW3J-BXGhhIyvxlarorE6zfGRtNgM5xXb9r6aL6dCV5Dru2u0aNImv6sG-ANcXXDn8qEUMqOeebxKVbleL-eMgnI8Xy-qp-yXyhxEeARObO3SnPdfNCnfIpNEHKvQ6rExng_YFRrlkpA2Fyq4gh2TkKNl7NfDWXvw1h58zr6jUeiDQus1wFfhQ_dK3rh3IEf5KJCwCSm2hS40f8dIjpA6v0Jihl0FqE_PtCGf8o6rED1WnLU43XsOMIKCYzvEEtzg72mf2d2hmg" alt="Our Story" className="story-img" />
          </div>
          <div className="story-content">
            <h2 className="story-title">Our Story</h2>
            <div className="story-text">
              <p>What started as a small, passionate team of three local travel enthusiasts in Colombo has blossomed into one of Sri Lanka's most trusted Destination Management Companies. Our journey was never about volume; it was about the depth of experience.</p>
              <p>Over the last decade, we have traversed every corner of this emerald isle, building relationships with local artisans, village elders, and boutique hoteliers to ensure our guests access the true heart of Ceylon.</p>
            </div>
            <div className="founder-quote-box">
              <p className="founder-quote">"Our goal has always been simple — to help travelers experience Sri Lanka the way locals know and love it."</p>
              <cite className="founder-cite">— Founder, Ceylon Journeys</cite>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <span className="material-symbols-outlined mv-icon">explore</span>
              <h3>Our Mission</h3>
              <p>To curate safe, authentic, and personalized travel experiences that celebrate the heritage, nature, and people of Sri Lanka while fostering sustainable tourism.</p>
            </div>
            <div className="mv-card">
              <span className="material-symbols-outlined mv-icon">landscape</span>
              <h3>Our Vision</h3>
              <p>To be the global benchmark for luxury travel in Sri Lanka, recognized for our unwavering commitment to quality, integrity, and local empowerment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Ceylon Journeys? */}
      <section className="why-ceylon-section container">
        <div className="section-header-center">
          <h2>Why Ceylon Journeys?</h2>
          <p>We provide the foundation for your adventure, handling the details so you can immerse yourself in the moment.</p>
        </div>
        <div className="why-ceylon-grid">
          {[
            { icon: 'verified_user', title: 'Licensed & Bonded', desc: 'Full SLTDA certification ensures your journey is protected by national tourism standards and regulations.' },
            { icon: 'edit_calendar', title: 'Tailor-Made Itineraries', desc: 'No two journeys are the same. We craft each itinerary from scratch based on your specific passions and pace.' },
            { icon: 'directions_car', title: 'Professional Chauffeurs', desc: 'Our expert English-speaking chauffeurs are more than drivers; they are knowledgeable hosts and storytellers.' },
            { icon: 'support_agent', title: '24/7 Concierge Support', desc: 'Travel with peace of mind knowing our dedicated support team is available around the clock for any request.' },
            { icon: 'hotel', title: 'Selected Hotels', desc: 'We personally vet every boutique villa and luxury resort to ensure they meet our strict standards of excellence.' },
            { icon: 'payments', title: 'Transparent Pricing', desc: 'No hidden fees or unexpected costs. We provide clear, all-inclusive quotes for total transparency.' },
          ].map((item, idx) => (
            <div className="why-ceylon-card" key={idx}>
              <span className="material-symbols-outlined why-ceylon-icon">{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Transplanted: Featured Packages / Top Destinations */}
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

      {/* 5. Our Values */}
      <section className="values-section">
        <div className="container">
          <div className="values-grid">
            {[
              { icon: 'verified', title: 'Authenticity', desc: 'Real connections, not just tourist attractions.' },
              { icon: 'shield_with_heart', title: 'Trust', desc: 'Integrity in every interaction and booking.' },
              { icon: 'workspace_premium', title: 'Excellence', desc: 'A relentless focus on quality and luxury detail.' },
              { icon: 'diversity_3', title: 'Care', desc: 'Nurturing our guests, staff, and environment.' }
            ].map((v, i) => (
              <div className="value-card" key={i}>
                <span className="material-symbols-outlined value-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {[
              { num: '15+', label: 'Years of Expertise' },
              { num: '5,000+', label: 'Happy Travelers' },
              { num: '100+', label: 'Luxury Vehicles' },
              { num: '24/7', label: 'Concierge Service' }
            ].map((stat, i) => (
              <div className="stat-card" key={i}>
                <div className="stat-number font-display-lg">{stat.num}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Experience Showcase */}
      <section className="showcase-section container">
        <div className="section-header-center">
          <h2>Experience Sri Lanka</h2>
          <p>A glimpse into the magical landscapes we call home.</p>
        </div>
        <div className="showcase-grid">
          <div className="showcase-main relative group">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjuq-so3dB3HmZ0XuLs3vnLG4RgCpsnw9nwKj8xO_526yun2JNX2TtXnRvxREYxGc4fdgbuSzblVYF6jH7v_KpXasJHg8joXc5CtiZqL9kpugLwqNe6vM6QC4CCZ8_GsKdP0jzFuWO-UXEMvLBdzhWzXhxLso-cTTR0Ao-TAF5bD4eazaz_ihtmrYIGf02yUgISx0ig1AlLaybxs7KSzLMnyibsAVJlPTTuplRYxT94ItZU1F_RuerGZpmor1XD8v7Sj_1kY_adxg" alt="Sigiriya" className="showcase-img" />
          </div>
          <div className="showcase-column">
            <div className="showcase-small relative group">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrGK3j3eQ0QLPUOrB56KjGwOTVhgnwSgq_9wUQZfuFa5ZlgGoBAWd1nSOkuAyiV5ShdX5zGTAgl6bnEVGFDD9ETtJJJTIq15x7s_ZzX9MtpVSUmGCdY-oUjD-2sCdIXXKuzuz6XdE7UxzHBcWD-a7zQj9vFWP2smxLRcOXI2-e59jt16inPkpTzbSYMkPNOEu6KVUCMTFnqD04KKEZ7ZYGrR4MaEahV9kjQ6x-3ub7rOe2IogGLtQkdS0D_S-2eu0GaIvCOmU3SlM" alt="Ella" className="showcase-img" />
            </div>
            <div className="showcase-small relative group">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRpSNOEri3Lqbd_k7nNtGGTx_q6k0SM_PNX9IRJeHASPLZyTqvFNiJUk9XPpuXHEAb0wJOsuE4tdo_I--SkMmlnggex8QcRAxJrRU6oyBaL_coU8wXgh1XhWypeWfAskovERUCJ8mitmKxmmCmbf17P-X0rY8YYIV5eANOBknwLpE2S2Np0wWXdZwdPrxJwFjpAsc_Ayp5AnthNlw5uMkD1B0yA2XzCgooezk-qR7AQkg6F7iJV9SeoxYGvM9RnVquTDb4S17VQGA" alt="Galle Fort" className="showcase-img" />
            </div>
          </div>
          <div className="showcase-side relative group">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV-2QHEsUa3i4ZTjcWaXrBc5i0hYzSkA0j6HXKeUKu_SRIrU2Dh326XPGOzm67izAJIv82kqusUFqWgH-rGekPcFL5_fV_bHKdnBm4_ctKl-hCqnTW2Ro4S5ogaR91OE6WB9raxpAXvACK9CqAG3T6vTrOgxa9K57Vj0A6tdI5GZLyjcxEJ4VmK_kOP7LcSgP0POBLdQNG70TGfdbMsQ92L56cmTpygzH_FjbB5oKuJbLxUQst-D16uIItQ1vt2-pxkLBtpE5I0p8" alt="Kandy Heritage" className="showcase-img" />
          </div>
        </div>
      </section>

      {/* 8. Meet Our Team */}
      <section className="team-section container">
        <div className="section-header-center">
          <h2>Meet Our Travel Experts</h2>
          <p>The passionate individuals behind your seamless Sri Lankan adventure.</p>
        </div>
        <div className="team-grid">
          {[
            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-iP157HzIjANZVIfN-H5uW4HK2XUR91Aly-Lu47gQ6F9ZH05wKS-_pLvGmsEXj5iJIPi1xPzGsKL_BfjWb-uJf0DrpLQnLOyCyYVI2qvoefb1GHqnxBEViYmEPPeXFJ1tlAcwM2WrmnLnnU-0NqeVSP4qBLxxqPAZ_CVa8mZWHWW2fQELZfxBgcwH99UShC0V46Ho9WYKOBRM39nqZweg1mkzP6YGeU8AaJFwHphG0mb1ADnXQOp5AeFlU75uTUKsR_MpsQq9r04', name: 'Ranil Perera', role: 'Founder & CEO', lang: 'English, Sinhalese, Japanese' },
            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8iCQokjTeg-o6-t5f3t5C0BGPJC1e_pQmWgvkp8yjUr0fYUfIkltf-hBd_YrYdnODSj0rq8HbuTjsq4sxvy7_5o3OvYm0kB-ON7GpV-WK9wrKZFruhN7yBRbMQfeCBYPhJqH908fTtc_FnMhYUyUmVjKlK6phnjyvH--wM5MfMTR93CKKqy9Sw7RapvOznoSbHJBrGdFmWqrcBN--9Ld_2S9JHvHnfz9DdmmAfeWHlF0JHt5NBOxwNrIsUxCM5iWco6W8Y88gYMQ', name: 'Ishani De Silva', role: 'Senior Tour Consultant', lang: 'English, German, Sinhalese' },
            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChE1DQ-OeXSAgNrblzQivsN8-toRBY5mIOwjT8NjzGoSquma2Qg6296H8vuQFhRLlxMnC4L3TM1zDGbTYDSRU0fqAIBRBasxzf7bjXPeTGv0A6Z1r9Qv1bxGMIMPoo54IRXk09D1Q2JFtPM0TLDqrrB8wJdDoc2mlrbNqSvQZw4Tt9hOjZDJPhHhJuLwaa6C83TrVrwVtztQBmquDzwx1LCA9MQLvqZhjgbx6m_iKH0Ipl9DMOy0aPgNwPxNniFBJdNaiVAkkzKms', name: 'Kumara Rathnayake', role: 'Experience Architect', lang: 'English, French, Sinhalese' }
          ].map((member, i) => (
            <div className="team-card" key={i}>
              <img src={member.img} alt={member.name} className="team-img" />
              <h4>{member.name}</h4>
              <p className="team-role">{member.role}</p>
              <p className="team-lang">Languages: {member.lang}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Timeline */}
      <section className="timeline-section container">
        <div className="section-header-center">
          <h2>Our Milestone Journey</h2>
        </div>
        <div className="timeline-container">
          <div className="timeline-line"></div>
          {[
            { year: '2013', title: 'The Seed is Planted', desc: 'Ceylon Journeys founded in Colombo with 3 employees and 2 vehicles.' },
            { year: '2017', title: 'Expanding Horizons', desc: 'Opened regional office in Kandy and launched the "Signature Collection" of boutique stays.' },
            { year: '2021', title: 'Resilience & Digital Growth', desc: 'Awarded WTTC "Safe Travels" stamp and implemented AI-powered itinerary curation.' },
            { year: '2026', title: 'Vision 2026', desc: 'Aiming for 100% carbon-neutral operations and global service expansion.' }
          ].map((milestone, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot"></div>
              <span className="timeline-year">{milestone.year}</span>
              <h4>{milestone.title}</h4>
              <p>{milestone.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Testimonials & Certs */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header-center">
            <div className="certs-row">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-OKWaXT_N5Ryq6EpK1gfD9MXn_VyKrUYmtAng282hM6Qhi9SpZLld6R5xGRqhGWouQRVdSfy6B-q8KOCNaSqrGogZgOmt3ImaBmE00uKgNlpStvmmK-MHCwYFyWGbWd4_7Ru0gMac2mocCA1aWEZiPhf310X81W2UyPqGC7gBiyAGrBYp3QkgieKo64kN1iM8I5khk-C2JhlYcJRZls9FmR7LupfnxEr4xdK4BRjlrHHg5ufmBI1NNHccoe4xqfb4c26iAxRL7hM" alt="SLTDA" />
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDegx9si3VrcCaJBQbQjD2dGm5nHrZg82viKKxYuNKIUMOwLC86TY4GIcKOpcsweRkuh404KDibGkH-q4s-ULOFUZtXCFhQJB4zmh2IQKTRlpF8rXnCZrrBewwW0MXJTC7oM-H8ZaqZ3fdonhYYAcPecbBWCyDtpX-N0IeMePJMP8y-xiDfZ4AdWzrwBLN4DPTyt6NLQZvwO4inWHJERCwU_sP8EhhhFxDHut8OqyPRUXX5g67JQ8-CTVMBqE5z3vr3cMGBk_6VZWs" alt="WTTC" />
            </div>
            <h2>Voices of Our Travelers</h2>
          </div>
          <div className="testimonials-grid">
            {[
              { text: '"An absolutely seamless experience from arrival to departure. Our driver was not only professional but became like family by the end of the trip. The selection of boutique villas was perfect."', author: 'Sarah J., London' },
              { text: '"Ceylon Journeys showed us a side of Sri Lanka we never would have found on our own. The private cooking class in a village home was the highlight of our entire honeymoon."', author: 'Marcus & Elena, Stockholm' }
            ].map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="stars">
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                </div>
                <p>"{t.text}"</p>
                <div className="author">— {t.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="final-cta-section">
        <div className="final-cta-bg">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtJfgvPCaf7Tn16EvIKRCfYdF2OkarurtSJUgx4fMBrHubjNENqaVgrrbyvyaDDvkBRCYNi9rqSqpubNCem36HUMZLqGT4jI5aPZsjTWIBerxKq_oxXdlgpue5p7nU9nq67zGQAT93RbSxzNo6j_-aYD4YulPHHXIJVDscHO-QG707lLCkgm1NHqIAxE2l9jc4nizkCl_38Y8NnaoGCFyQns1u9nUu3PdLfor2GdbAFB027EbHK-vretLg5phcpyX19mrxNuiB7xk" alt="Sunset CTA" />
          <div className="cta-overlay"></div>
        </div>
        <div className="container relative z-10 text-center">
          <h2>Ready To Experience The Real Sri Lanka?</h2>
          <div className="cta-actions">
            <Button variant="primary">Start Planning My Trip</Button>
            <button className="btn-outline-white">Contact Our Team</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
