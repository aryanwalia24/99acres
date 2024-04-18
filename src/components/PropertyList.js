import React from 'react';

const PropertyList = ({ properties }) => {
  return (
    <div>
      <h2>Property List</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <strong>Title:</strong> {property.title}, <strong>Location:</strong> {property.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;
