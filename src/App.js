import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropertyList from '../src/pages/propertyList'; 
import PropertyDetail from '../src/pages/PropertDetail'; 

function App() {
  return (
    <Router>
    <Routes>
    <Route exact path="/" element={<PropertyList/>}/>
    <Route exact path="/property/:id"  element={<PropertyDetail/>}  />
  </Routes>
    </Router>
  );
}

export default App;


