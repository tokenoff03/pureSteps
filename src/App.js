
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import React, { useState } from 'react';
import Sneakers from './Sneakers/Sneakers';
import Footer from './Footer/Footer';
import Services from './Services/Services';
import Order from './Order/Order';
import Reviews from './Reviews/Reviews';
import Map from './Map/Map';

function App() {
  const [date,setDate] = useState("");
  return (
    <div className="App">
      <div className="firstPage">
        <div className="container">
          <Header/>
          <Main date={date} setDate ={setDate}/>
        </div>
      </div>
      <div className="clear">
            
          </div>
      <div className="container">
          <Sneakers/>
          <Services/>
          <Order/>
          <Reviews/>
          <Map/>
          <Footer/>
      </div>
      
    </div>
  );
}

export default App;
