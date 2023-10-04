import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropertyCard from '../../components/hotelCard';
import data from '../../data.json'


function Property() {
    const { id } = useParams();
    const  filteredProperty = data.items.filter((item) => item.propertyId === parseInt(id));
    console.log(filteredProperty)
  return (
    <>
    {filteredProperty.map((property, index) => (
        <PropertyCard property={property}/>
      ))}
    </>
  );
}

export default Property;
