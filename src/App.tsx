import React from 'react';

const App = () => {
  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: '#ffffff', color: '#1f2937', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        
        .nav { position: fixed; top: 0; left: 0; right: 0; background: #ffffff; border-bottom: 1px solid #e5e7eb; z-index: 100; }
        .nav-container { max-width: 1100px; margin: 0 auto; padding: 1rem 1.5rem; display: flex; justify-content: space-between; align-items: center; }
        .logo { font-weight: 700; font-size: 1.125rem; color: #6b21a8; }
        .nav-links { display: flex; gap: 2rem; }
        .nav-links a { color: #4b5563; text-decoration: none; font-weight: 500; font-size: 0.95rem; }
        .nav-links a:hover { color: #6b21a8; }
        
        .hero { padding: 8rem 1.5rem 5rem; text-align: center; background: linear-gradient(180deg, #f3e8ff 0%, #ffffff 100%); }
        .hero-content { max-width: 600px; margin: 0 auto; }
        .hero h1 { font-size: 2.5rem; font-weight: 700; color: #1f2937; margin-bottom: 1rem; }
        .hero p { font-size: 1.125rem; color: #6b7280; margin-bottom: 2rem; }
        
        .btn-primary { display: inline-block; padding: 0.875rem 2rem; background: #6b21a8; color: #ffffff; text-decoration: none; font-weight: 600; border-radius: 8px; }
        .btn-primary:hover { background: #581c87; }
        
        .container { max-width: 1100px; margin: 0 auto; padding: 0 1.5rem; }
        
        .services { padding: 5rem 0; }
        h2 { text-align: center; font-size: 1.75rem; font-weight: 700; margin-bottom: 2.5rem; color: #1f2937; }
        
        .service-card { max-width: 500px; margin: 0 auto; padding: 2rem; background: #f9fafb; border-radius: 12px; border: 1px solid #e5e7eb; }
        .service-card h3 { font-size: 1.25rem; font-weight: 600; margin-bottom: 1.25rem; color: #1f2937; }
        .service-card ul { list-style: none; margin-bottom: 1.5rem; }
        .service-card li { padding: 0.5rem 0; padding-left: 1.5rem; position: relative; color: #4b5563; }
        .service-card li::before { content: "✓"; position: absolute; left: 0; color: #0d9488; font-weight: 600; }
        .pricing { font-weight: 600; color: #6b21a8; font-size: 1.1rem; }
        
        .why-us { padding: 5rem 0; background: #fafafa; }
        .benefits-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; }
        .benefit { padding: 1.5rem; background: #ffffff; border-radius: 10px; border: 1px solid #e5e7eb; }
        .benefit h3 { font-size: 1.1rem; font-weight: 600; margin-bottom: 0.5rem; color: #1f2937; }
        .benefit p { color: #6b7280; font-size: 0.95rem; }
        
        .how-it-works { padding: 5rem 0; }
        .steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        .step { text-align: center; }
        .step-number { display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; background: #6b21a8; color: #ffffff; border-radius: 50%; font-weight: 700; font-size: 1.125rem; margin-bottom: 1rem; }
        .step h3 { font-size: 1rem; font-weight: 600; margin-bottom: 0.25rem; color: #1f2937; }
        .step p { font-size: 0.875rem; color: #6b7280; }
        
        .contact { padding: 5rem 0; background: #fafafa; }
        .contact-content { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; max-width: 800px; margin: 0 auto; }
        .contact-info { text-align: center; }
        .service-area { font-weight: 600; color: #1f2937; margin-bottom: 0.25rem; }
        .hours { color: #6b7280; margin-bottom: 1.5rem; }
        .phone { margin-bottom: 1.5rem; }
        .phone span { display: block; color: #6b7280; font-size: 0.9rem; margin-bottom: 0.25rem; }
        .phone a { font-size: 1.5rem; font-weight: 700; color: #6b21a8; text-decoration: none; }
        
        .qr-section { text-align: center; }
        .qr-placeholder { width: 160px; height: 160px; margin: 0 auto 1rem; background: #ffffff; border: 2px dashed #d1d5db; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #9ca3af; font-size: 0.9rem; }
        .qr-section p { color: #6b7280; font-size: 0.875rem; }
        
        .footer { padding: 2rem 1.5rem; text-align: center; border-top: 1px solid #e5e7eb; }
        .footer p { color: #9ca3af; font-size: 0.875rem; }
      `}</style>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="logo">YOUR LOGO</div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#why-us">Why Us</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>Mobile Oil Change</h1>
          <p>We come to you. At home, at work, wherever you are.</p>
          <a href="#contact" className="btn-primary">Schedule Now</a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services">
        <div className="container">
          <h2>What We Offer</h2>
          <div className="service-card">
            <h3>Full Service Oil Change</h3>
            <ul>
              <li>Conventional or synthetic oil</li>
              <li>New oil filter</li>
              <li>Fluid level check & top-off</li>
              <li>Tire pressure check</li>
              <li>Visual inspection</li>
            </ul>
            <p className="pricing">Call for Quote</p>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="why-us">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="benefits-grid">
            <div className="benefit">
              <h3>Save Time</h3>
              <p>No waiting rooms. Keep doing what you're doing while we handle the oil change.</p>
            </div>
            <div className="benefit">
              <h3>We Come to You</h3>
              <p>Home, office, gym — wherever is convenient for you.</p>
            </div>
            <div className="benefit">
              <h3>Quality Service</h3>
              <p>Professional service with quality products.</p>
            </div>
            <div className="benefit">
              <h3>Simple & Easy</h3>
              <p>Just call or text to schedule. No hassle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <span className="step-number">1</span>
              <h3>Schedule</h3>
              <p>Call or text to book</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <h3>We Arrive</h3>
              <p>At your location</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <h3>We Work</h3>
              <p>You relax</p>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <h3>Done</h3>
              <p>Back on the road</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <p className="service-area">Serving the Greater Charlotte Area</p>
              <p className="hours">Weekday Evenings & Weekends</p>
              <div className="phone">
                <span>Call or Text:</span>
                <a href="tel:5551234567">(555) 123-4567</a>
              </div>
              <a href="tel:5551234567" className="btn-primary">Call to Schedule</a>
            </div>
            <div className="qr-section">
              <div className="qr-placeholder">
                <span>QR Code</span>
              </div>
              <p>Scan to contact</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Your Business Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;