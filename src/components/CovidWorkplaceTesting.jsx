import './CovidWorkplaceTesting.css';

const IMG_HERO = 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&q=80';
const IMG_SWAB = 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=600&q=80';

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

export default function CovidWorkplaceTesting(props) {
  const onContactClick = props.onContactClick || (() => {});
  return (
    <section className="covid-workplace-page">
      <div className="covid-workplace-hero">
        <img src={IMG_HERO} alt="Delivery service" className="covid-workplace-hero-image" />
      </div>
      <div className="covid-workplace-inner">
        <h1 className="covid-workplace-title">Workplace Testing</h1>
        <p className="covid-workplace-subtitle">Solution Providers</p>
        <div className="covid-workplace-two-col">
          <div className="covid-workplace-left">
            <div className="covid-workplace-body">
              <p>As part of the fight against the COVID-19 virus, businesses are being asked to provide testing facilities for their staff and workforce.</p>
              <p>Treadstone are providing secure delivery and collection of testing kits to companies and laboratories across the UK.</p>
              <p>Our Team of trained couriers are able to deliver and collect kits from the workplace 7 days a week.</p>
              <p>As the samples are time sensitive, we ensure dedicated deliveries within the required timed windows.</p>
              <p>We are also able to provide next day delivery solutions of Home Testing Kits should this be required.</p>
              <p>If you wish to discuss your requirements further please <button type="button" className="inline-link" onClick={onContactClick}>contact us</button>.</p>
            </div>
          </div>
          <div className="covid-workplace-right">
            <div className="covid-workplace-image-wrap">
              <img src={IMG_SWAB} alt="COVID-19 test kit and swab" className="covid-workplace-image" />
            </div>
          </div>
        </div>
        <footer className="covid-workplace-footer">
          <span className="covid-workplace-copyright">©Treadstone Logistics 2026</span>
          <div className="covid-workplace-social">
            <a href="#" aria-label="LinkedIn" className="social-icon"><LinkedInIcon /></a>
            <a href="#" aria-label="Twitter" className="social-icon"><TwitterIcon /></a>
            <a href="#" aria-label="Facebook" className="social-icon"><FacebookIcon /></a>
          </div>
        </footer>
      </div>
    </section>
  );
}
