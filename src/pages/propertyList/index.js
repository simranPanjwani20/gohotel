import React, { useEffect, useState } from 'react';
import './style.css';
import Tabs from '../../components/tabs';
import data from '../../data.json'
import PropertyCard from '../../components/hotelCard';

function PropertyList() {
  const [propertyData, setPropertyData] = useState(data.items);
  console.log(propertyData)

  const [visibleItems, setVisibleItems] = useState(6);

  const showMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  };

  //managing data change for filter and sort
  useEffect(() => {
}, [propertyData])

  return (
    <div className='cont'>
    <h2 className='heading'>Featured Listed Property</h2>
    <div className="Tabs">
      <Tabs setPropertyData={setPropertyData}/>
    </div>
    <div className='propertylist'>
      {propertyData.slice(0, visibleItems).map((property, index) => (
        <PropertyCard property={property}/>
      ))}
    </div>
    {visibleItems < propertyData.length && (
        <button onClick={showMore} className="show-more-button">
          Show More
        </button>
      )}
    </div>
  );
}

export default PropertyList;
