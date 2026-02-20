import './BecomeACourier.css';

const IMG_PARCEL = 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&q=80';
const IMG_MEDICAL = 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80';
const IMG_PHARMA = 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80';
const IMG_GROCERY = 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80';

const reasons = [
  {
    title: 'Amazing Opportunities',
    text: 'We offer flexible working patterns so you can choose when and where to work. Whether you are an experienced courier or new to the industry, we have opportunities to suit you.',
  },
  {
    title: 'Flexibility',
    text: 'Receive work notifications on your mobile phone and accept offers with a simple click. Plan your work schedule and choose your work type, from Multi-Drops to Pharmacy Home deliveries, to suit your lifestyle.',
  },
  {
    title: 'No vehicle, No problem',
    text: 'We can assist with van hire through our supplier application process, so you can get on the road quickly.',
  },
  {
    title: 'No Insurance?',
    text: 'PDVG courier insurance is available, paid only for your working time. Rates start at 80p per hour, subject to conditions.',
  },
  {
    title: 'New to the logistics Industry?',
    text: 'We provide classroom and on-road training, along with ongoing support from our experienced operations supervisors.',
  },
  {
    title: 'Manage your finances',
    text: 'Use our online courier portal to view, download or print your invoices. Payments are made weekly directly into your bank account.',
  },
  {
    title: 'Start quickly',
    text: 'Complete our quick online application with a few questions and document uploads. Browse current opportunities and start working with us soon. We look forward to welcoming you to the team.',
  },
];

export default function BecomeACourier(props) {
  const onWorkWithUs = props.onWorkWithUs || (() => {});

  return (
    <section className="become-courier-page">
      <div className="become-courier-inner">
        <h1 className="become-courier-title">Become a Courier</h1>
        <div className="become-courier-gallery">
          <img src={IMG_PARCEL} alt="Parcel delivery" className="become-courier-gallery-img" />
          <img src={IMG_MEDICAL} alt="Medical delivery" className="become-courier-gallery-img" />
          <img src={IMG_PHARMA} alt="Pharmaceutical delivery" className="become-courier-gallery-img" />
          <img src={IMG_GROCERY} alt="Grocery delivery" className="become-courier-gallery-img" />
        </div>
        <h2 className="become-courier-heading">Why work with Treadstone?</h2>
        <ol className="become-courier-list">
          {reasons.map((item, i) => (
            <li key={i} className="become-courier-item">
              <strong>{item.title}:</strong> {item.text}
            </li>
          ))}
        </ol>
        <button type="button" className="become-courier-cta" onClick={onWorkWithUs}>
          Work with us
        </button>
      </div>
    </section>
  );
}
