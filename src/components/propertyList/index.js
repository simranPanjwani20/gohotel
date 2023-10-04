import React, { useState } from 'react';
import hotelCard from '../hotelCard';

const PropertyList = ({ properties }) => {
  const [visibleItems, setVisibleItems] = useState(6);

  const showMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  };

  return (
    <div>
      {properties.slice(0, visibleItems).map((property, index) => (
        <hotelCard property={property}/>
      ))}
      {visibleItems < properties.length && (
        <button onClick={showMore} className="show-more-button">
          Show More
        </button>
      )}
    </div>
  );
};

export default PropertyList;
