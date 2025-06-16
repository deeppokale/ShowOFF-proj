import React,{useRef} from 'react';
import { useParams } from 'react-router-dom';
import '../styles/RestaurantDetail.css';

const restaurantData = {
  Balsa: {
    name: 'Balsa',
    address: 'Gate 4, Trade View Building, Utopia City, Lower Parel, Mumbai',
    cuisines: ['North Indian', 'Chinese', 'Mediterranean'],
    costForTwo: '₹1,800',
    rating: '4.1',
    deliveryRating: '4.0',
    phone: '+918591383371',
    offers: [
      'Flat 15% OFF on food bills',
      'Free Dessert with orders above ₹1000',
    ],
    topDishes: ['Pineapple Chutney', 'Momos', 'Cocktails'],
    highlights: ['Outside Seating', 'Nice Concept', 'Live Music'],
    images: ['/images/Balsa.jpeg', '/images/Oasis.jpeg', '/images/Moonlight.jpg'],
  },
  Lyla: {
    name: 'Lyla',
    address: 'Unit 12, Maker Maxity, Bandra Kurla Complex, Mumbai',
    cuisines: ['Mexican', 'Beverages', 'Desserts'],
    costForTwo: '₹2,500',
    rating: '4.0',
    deliveryRating: '3.9',
    phone: '+918599443210',
    offers: ['Flat 10% OFF', 'Buy 2 Get 1 Free on drinks'],
    topDishes: ['Churros', 'Tacos', 'Margaritas'],
    highlights: ['Rooftop Seating', 'Good Ambience'],
    images: ['/images/Lyla.jpg', '/images/Oasis.jpeg'],
  },
  Amelia: {
    name: 'Amelia',
    address: 'Plot B, G-Block, Bandra Kurla Complex, Mumbai',
    cuisines: ['Continental', 'Italian', 'Salad'],
    costForTwo: '₹2,800',
    rating: '4.3',
    deliveryRating: '4.1',
    phone: '+918593221194',
    offers: ['Flat 10% OFF', 'Free Mocktail with Mains'],
    topDishes: ['Pasta', 'Grilled Chicken', 'Caesar Salad'],
    highlights: ['Indoor Plants', 'Peaceful Environment'],
    images: ['/images/Amelia.jpg', '/images/Balsa.jpeg'],
  },
  'Luna Sky': {
    name: 'Luna Sky',
    address: 'Taj Mahal Tower, Apollo Bunder, Worli, Mumbai',
    cuisines: ['Bar Food', 'Italian'],
    costForTwo: '₹2,000',
    rating: '4.4',
    deliveryRating: '4.3',
    phone: '+918585832741',
    offers: ['Flat 20% OFF on total bill'],
    topDishes: ['Pizza', 'Tiramisu', 'Sangria'],
    highlights: ['Skylounge', 'DJ Nights'],
    images: ['/images/luna sky.jpg'],
  },
  'Oasis Lounge': {
    name: 'Oasis Lounge',
    address: 'Opp. Times Square, Andheri Kurla Road, Mumbai',
    cuisines: ['Asian', 'Thai', 'Chinese'],
    costForTwo: '₹1,600',
    rating: '4.2',
    deliveryRating: '4.0',
    phone: '+918594938494',
    offers: ['Flat 10% OFF', 'Happy Hours 4–7PM'],
    topDishes: ['Pad Thai', 'Spring Rolls', 'Green Curry'],
    highlights: ['Affordable', 'Quick Service'],
    images: ['/images/Oasis.jpeg'],
  },
  'Moonlight Bay': {
    name: 'Moonlight Bay',
    address: 'Near Marine Drive, South Mumbai',
    cuisines: ['Seafood', 'Grill'],
    costForTwo: '₹3,200',
    rating: '4.6',
    deliveryRating: '4.5',
    phone: '+918599349341',
    offers: ['Flat 25% OFF', 'Complimentary Dessert'],
    topDishes: ['Grilled Fish', 'Prawns', 'Lobster Thermidor'],
    highlights: ['Sea View', 'Romantic Ambience'],
    images: ['/images/Moonlight.jpg'],
  },
};

const RestaurantDetail = ({ darkMode, toggleDarkMode }) => {
  const { name } = useParams();
  const data = restaurantData[name];

  const offerRef = useRef();
  const dishesRef = useRef();
  const highlightsRef = useRef();
  const mapRef = useRef();

  const scrollTo = (ref) => {
    if (ref.current) ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  if (!data) return <p>Restaurant not found</p>;

  return (
    <>
      {/* Top Nav Bar */}
      <div className="top-bar">
        <div className="hamburger-icon">☰</div>
        <h1 className="logo-text">ShowOFF%</h1>
        <div className="dark-toggle" onClick={toggleDarkMode}>🌓</div>
      </div>

      {/* Scroll Buttons */}
      <div className="scroll-buttons">
        <button onClick={() => scrollTo(offerRef)}>Offers</button>
        <button onClick={() => scrollTo(dishesRef)}>Top Dishes</button>
        <button onClick={() => scrollTo(highlightsRef)}>Highlights</button>
        <button onClick={() => scrollTo(mapRef)}>Direction</button>
      </div>

      <div className="restaurant-detail-page">
        <h1>{data.name}</h1>
        <p className="cuisines">{data.cuisines.join(', ')}</p>
        <p className="address">{data.address}</p>
        <p className="cost">💰 {data.costForTwo} for two</p>
        <p className="contact">📞 {data.phone}</p>

        <div className="rating-section">
          <span className="rating">Dining: {data.rating}★</span>
          <span className="rating">Delivery: {data.deliveryRating}★</span>
        </div>

        <div className="gallery">
          {data.images.map((src, index) => (
            <img key={index} src={src} alt={`Gallery ${index + 1}`} />
          ))}
        </div>

        <div ref={offerRef}>
          <h3>Dining Offers</h3>
          <ul className="offers">
            {data.offers.map((offer, idx) => (
              <li key={idx}>{offer}</li>
            ))}
          </ul>
        </div>

        <div ref={dishesRef}>
          <h3>Top Dishes</h3>
          <div className="chips">
            {data.topDishes.map((dish, idx) => (
              <span className="chip" key={idx}>{dish}</span>
            ))}
          </div>
        </div>

        <div ref={highlightsRef}>
          <h3>Review Highlights</h3>
          <div className="chips">
            {data.highlights.map((item, idx) => (
              <span className="chip" key={idx}>{item}</span>
            ))}
          </div>
        </div>

        <div ref={mapRef}>
          <h3>Direction</h3>
          <iframe
            title="Google Maps"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(data.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            className="map-frame"
          />
        </div>
      </div>
    </>
  );
};


export default RestaurantDetail;
