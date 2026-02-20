import './ContentSection.css';

const VANS_IMAGE = 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80';

export default function ContentSection() {
  return (
    <section className="content-section">
      <div className="content-inner">
        <div className="content-two-col">
          <div className="content-left">
            <p>
              We deliver Last Mile delivery solutions for a wide range of business sectors including
              <strong> Retail, Food, Online and Medical.</strong>
            </p>
            <p>
              On Demand, Hand to Hand, 1 and 2 hour deliveries, Same Day or Next Day Multidrop.
            </p>
            <p>
              We help deliver your customer promises and improve business performance using cutting edge technology.
            </p>
            <p>
              Looking for a better way? We can work with you to design and develop a logistics solution to suit your business needs now and in the future.
            </p>
            <p>
              We are able to provide a range of different vehicle sizes which best suit our customers' UK logistics requirements.
            </p>
            <p>
              We are now able to deliver your COVID-19 testing kits direct to your street address using our Next Day Service.
            </p>
          </div>
          <div className="content-right">
            <div className="vans-image-wrap">
              <img src={VANS_IMAGE} alt="Delivery vans" className="vans-image" />
            </div>
            <p className="copyright">©Treadstone Logistics 2026</p>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn" className="social-icon">
                <LinkedInIcon />
              </a>
              <a href="#" aria-label="Twitter" className="social-icon">
                <TwitterIcon />
              </a>
              <a href="#" aria-label="Facebook" className="social-icon">
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LinkedInIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}
