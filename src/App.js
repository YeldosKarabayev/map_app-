import React from 'react';
import MapWithPoints from './components/MapWithPoints';
import { BrowserRouter as Route,  Routes, Router } from 'react-router-dom';
import Header from './components/Header';
import MapComponent from './components/MapComponent';


const App = () => {
  return (
   <div>
      <Header />
      {/*  <MapWithPoints /> */}
       <MapComponent /> 
    </div>
     
  );
};

export default App;