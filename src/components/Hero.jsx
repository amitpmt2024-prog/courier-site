import './Hero.css';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&q=80';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <img
          src={HERO_IMAGE}
          alt="Delivery person with package"
          className="hero-image"
        />
      </div>
    </section>
  );
}
