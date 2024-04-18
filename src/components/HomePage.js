// src/components/HomePage.js

import React, { useState } from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import PropertyCard from './PropertyCard';
import './css/HomePage.css';

const properties = [
    {
      id: 1,
      title: 'Luxury Apartment',
      location: 'New York',
      price: '$500,000',
      imageUrl: '/images/1.jpg',
    },
    {
      id: 2,
      title: 'Beach House',
      location: 'California',
      price: '$700,000',
      imageUrl: '/images/2.jpg',
    },
    {
      id: 3,
      title: 'Mountain Cabin',
      location: 'Colorado',
      price: '$350,000',
      imageUrl: '/images/3.jpg',
    },
    {
      id: 4,
      title: 'City Loft',
      location: 'Chicago',
      price: '$450,000',
      imageUrl: '/images/4.jpg',
    },
    {
      id: 5,
      title: 'Lakefront Property',
      location: 'Michigan',
      price: '$600,000',
      imageUrl: '/images/5.jpg',
    },
    {
      id: 6,
      title: 'Ranch House',
      location: 'Texas',
      price: '$800,000',
      imageUrl: '/images/6.jpg',
    },
    {
      id: 7,
      title: 'Penthouse Condo',
      location: 'Florida',
      price: '$1,200,000',
      imageUrl: '/images/7.jpg',
    },
    {
      id: 8,
      title: 'Historic Mansion',
      location: 'Georgia',
      price: '$2,500,000',
      imageUrl: '/images/8.jpg',
    },
    {
      id: 9,
      title: 'Modern Townhouse',
      location: 'Washington',
      price: '$750,000',
      imageUrl: '/images/9.jpg',
    },{
      id: 10,
      title: 'Seaside Villa',
      location: 'Florida',
      price: '$1,800,000',
      imageUrl: '/images/10.jpg',
    },
    {
      id: 11,
      title: 'Mountain Retreat',
      location: 'Colorado',
      price: '$900,000',
      imageUrl: '/images/11.jpg',
    },
    {
      id: 12,
      title: 'City Penthouse',
      location: 'New York',
      price: '$3,000,000',
      imageUrl: '/images/12.jpg',
    },
    {
      id: 13,
      title: 'Lakefront Cottage',
      location: 'Michigan',
      price: '$550,000',
      imageUrl: '/images/13.jpg',
    },
    {
      id: 14,
      title: 'Luxury Condo',
      location: 'California',
      price: '$1,200,000',
      imageUrl: '/images/14.jpg',
    },
    {
      id: 15,
      title: 'Country Estate',
      location: 'Texas',
      price: '$4,500,000',
      imageUrl: '/images/15.jpg',
    },
    {
      id: 16,
      title: 'Beachfront Bungalow',
      location: 'Hawaii',
      price: '$2,300,000',
      imageUrl: '/images/16.jpg',
    }    
  ];
  


  function HomePage() {
    const [filteredProperties, setFilteredProperties] = useState(properties);
  
    const handleSearch = (query) => {
      // Placeholder logic for filtering properties
      const filteredProperties = properties.filter(property =>
        property.title.toLowerCase().includes(query.toLowerCase()) ||
        property.location.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProperties(filteredProperties);
    };
  
    return (
      <div className="home-page">
        <Navbar />
        <SearchBar onSearch={handleSearch} />
        <div className="property-list">
          {filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    );
  }
  
  export default HomePage;