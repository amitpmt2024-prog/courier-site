import { useState } from 'react';
import './ContactUs.css';

const IMG_PARCEL = 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=280&q=80';
const IMG_MEDICAL = 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=280&q=80';
const IMG_PHARMA = 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=280&q=80';
const IMG_GROCERY = 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=280&q=80';
const IMG_DELIVERY = 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=280&q=80';

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
function TwitterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z"/>
    </svg>
  );
}

export default function ContactUs() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim() || !message.trim()) return;
    alert('Thank you for your enquiry. We will be in touch soon.');
  }

  return (
    <section className="contact-us-page">
      <div className="contact-us-inner">
        <h1 className="contact-us-title">Contact Us</h1>
        <p className="contact-us-intro">
          If you have a particular requirement or simply would like to have a chat, please call us on <strong>028 3818 5813</strong> or complete the contact form below and we will be happy to deal with your enquiry.
        </p>
        <form className="contact-us-form" onSubmit={handleSubmit}>
          <div className="contact-us-field">
            <label htmlFor="contact-email">Your email</label>
            <input id="contact-email" type="email" placeholder="name@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="contact-us-field">
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" placeholder="Your message..." value={message} onChange={(e) => setMessage(e.target.value)} rows={5} required />
          </div>
          <button type="submit" className="contact-us-submit">Send</button>
        </form>
        <div className="contact-us-gallery">
          <img src={IMG_PARCEL} alt="Parcel delivery" />
          <img src={IMG_MEDICAL} alt="Medical delivery" />
          <img src={IMG_PHARMA} alt="Pharmaceutical delivery" />
          <img src={IMG_GROCERY} alt="Grocery delivery" />
          <img src={IMG_DELIVERY} alt="Delivery service" />
        </div>
        <footer className="contact-us-footer">
          <span className="contact-us-copyright">©Treadstone Logistics 2026</span>
          <div className="contact-us-social">
            <a href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href="#" aria-label="Twitter"><TwitterIcon /></a>
            <a href="#" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" aria-label="Instagram"><InstagramIcon /></a>
          </div>
        </footer>
      </div>
    </section>
  );
}
