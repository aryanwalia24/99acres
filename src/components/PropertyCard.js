// src/components/PropertyCard.js
import React from 'react';
import './css/PropertyCard.css';

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <img src={property.imageUrl} alt={property.title} />
      <h2>{property.title}</h2>
      <p>{property.location}</p>
      <p>{property.price}</p>
    </div>
  );
}

export default PropertyCard;
