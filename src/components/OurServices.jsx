import './OurServices.css';

const IMG_COURIER = 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&q=80';
const IMG_MEDICINE = 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80';
const IMG_MEDICAL = 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80';
const IMG_FOOD = 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80';

const services = [
  { title: 'Courier Delivery', description: 'From a single envelope to multiple deliveries, we offer same-day, next-day, multi-drop, international and 1 & 2 hour deliveries to meet your needs.', image: IMG_COURIER, alt: 'Delivery box' },
  { title: 'Home Medicine Delivery', description: 'We provide home delivery of prescriptions, supporting vulnerable individuals and care homes with GDP trained drivers. COVID-19 Testing Kit delivery service now available.', image: IMG_MEDICINE, alt: 'Medicine and test kit' },
  { title: 'Medical Sample Delivery', description: 'Tailored services for collections or deliveries of medical samples, available as a regular service or for ad-hoc emergencies. COVID-19 Testing Kit delivery service now available.', image: IMG_MEDICAL, alt: 'Medical samples' },
  { title: 'Food Delivery', description: 'We serve online food retailers with direct-from-store deliveries to the kitchen table, scheduled deliveries, and training in cold chain delivery processes including Alcohol Delivery Verification protocol.', image: IMG_FOOD, alt: 'Fresh groceries' },
];

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
function TwitterIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

export default function OurServices({ onContactClick }) {
  return (
    <section className="our-services-page">
      <div className="our-services-inner">
        <h1 className="our-services-title">Our Services</h1>
        <div className="our-services-intro">
          <p>We provide Last Mile Delivery Services in the <strong>Online, Retail, Food, Pharmaceutical and Pharmacy</strong> sectors.</p>
          <p>We have experience in providing bespoke solutions for both SME and multi-national organisations. Our team members undergo DBS background checks and have Real Time licence checking.</p>
          <p>We serve some of the world&apos;s largest online retailers and manufacturers. We embrace a Can Do attitude.</p>
          <p>We offer COVID-19 Testing Kit delivery services, including collection and next-day network delivery. Please <button type="button" className="inline-link" onClick={onContactClick}>contact us</button> to discuss your requirements.</p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <h2 className="service-card-title">{s.title}</h2>
              <p className="service-card-desc">{s.description}</p>
              <div className="service-card-image-wrap">
                <img src={s.image} alt={s.alt} className="service-card-image" />
              </div>
            </div>
          ))}
        </div>
        <footer className="our-services-footer">
          <span className="our-services-copyright">©Treadstone Logistics 2026</span>
          <div className="our-services-social">
            <a href="#" aria-label="LinkedIn" className="social-icon"><LinkedInIcon /></a>
            <a href="#" aria-label="Twitter" className="social-icon"><TwitterIcon /></a>
            <a href="#" aria-label="Facebook" className="social-icon"><FacebookIcon /></a>
          </div>
        </footer>
      </div>
    </section>
  );
}
