import React, { useState } from 'react';
import './style.css'
import data from '../../data.json'

const Tabs = ({ setPropertyData }) => {
  const [activeTab, setActiveTab] = useState('Paris');
  const countries =['New York', 'London', 'Paris','Mumbai'];

  const handleTabClick = (countryName) => {
    setActiveTab(countryName);
    const filteredData =  data.items.filter(property => property.country.includes(countryName)); 
    setPropertyData(filteredData)
  };

  return (
    <div>
      <div className="tab-container">
        {countries.map((country) => (
          <button
            key={country}
            onClick={() => handleTabClick(country)}
            className={` ${activeTab === country ? 'active' : 'disable'}`}
          >
            {country}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
