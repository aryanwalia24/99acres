// ParentComponent.js
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import PropertyList from "./PropertyList";

const ParentComponent = () => {
  // Sample property data
  const initialProperties = [
    { id: 1, title: "Luxury Apartment", location: "New York" },
    { id: 2, title: "Beach House", location: "California" },
    { id: 3, title: "Mountain Cabin", location: "Colorado" },
    { id: 4, title: "City Loft", location: "Chicago" },
    { id: 5, title: "Lakefront Property", location: "Michigan" },
    { id: 6, title: "Ranch House", location: "Texas" },
    { id: 7, title: "Penthouse Condo", location: "Florida" },
    { id: 8, title: "Historic Mansion", location: "Georgia" },
    { id: 9, title: "Modern Townhouse", location: "Washington" }
  ];

  // State to store the list of properties
  const [properties, setProperties] = useState(initialProperties);

  const handleSearch = (query) => {
    console.log('Search query:', query);
    const filteredProperties = initialProperties.filter(property =>
      property.title.toLowerCase().includes(query.toLowerCase()) ||
      property.location.toLowerCase().includes(query.toLowerCase())
    );
    setProperties(filteredProperties);
  };

  return (
    <div>
     <SearchBar onSearch={handleSearch} />
      <PropertyList properties={properties} />
    </div>
  );
};

export default ParentComponent;