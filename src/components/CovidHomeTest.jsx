import './CovidHomeTest.css';

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
function YouTubeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

export default function CovidHomeTest({ onContactClick }) {
  return (
    <section className="covid-home-page">
      <div className="covid-home-banner">
        <h1 className="covid-home-banner-title">COVID-19 Home Test Collection Service</h1>
      </div>
      <div className="covid-home-inner">
        <div className="covid-home-two-col">
          <div className="covid-home-left">
            <h2 className="covid-home-heading">Home Testing</h2>
            <p className="covid-home-subheading">Solution Providers</p>
            <div className="covid-home-body">
              <p>The COVID-19 virus has made home testing a vital part of keeping people and workplaces safe. Treadstone offers a secure collection service for test kits from homes and companies, delivering them to your designated laboratories.</p>
              <p>Our trained couriers collect kits from residential addresses and deliver them for next-day analysis. We understand that samples are time-sensitive and work to the timed windows required for collections.</p>
              <p>Laboratories provide quick test results. We send text and email notifications for collection windows so you do not have to wait. When the test is delivered, we email the donor with a Proof of Delivery (POD).</p>
              <p>If you wish to discuss your requirements further please <button type="button" className="inline-link" onClick={onContactClick}>contact us</button>.</p>
            </div>
          </div>
          <div className="covid-home-right">
            <div className="covid-home-image-wrap">
              <img src={IMG_SWAB} alt="COVID-19 swab test kit" className="covid-home-image" />
            </div>
          </div>
        </div>
        <footer className="covid-home-footer">
          <span className="covid-home-copyright">©Treadstone Logistics 2025</span>
          <div className="covid-home-social">
            <a href="#" aria-label="LinkedIn" className="social-icon"><LinkedInIcon /></a>
            <a href="#" aria-label="Twitter" className="social-icon"><TwitterIcon /></a>
            <a href="#" aria-label="YouTube" className="social-icon"><YouTubeIcon /></a>
          </div>
        </footer>
      </div>
    </section>
  );
}
