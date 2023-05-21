
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import React, { useState, useEffect } from 'react';
import Sneakers from './Sneakers/Sneakers';
import Footer from './Footer/Footer';
import Services from './Services/Services';
import Order from './Order/Order';
import Reviews from './Reviews/Reviews';
import Map from './Map/Map';
import Preloader from './Preloader/Preloader';

function App() {
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    setDate(`${year}-${month}-${day}`);

    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    }, 6000)
  }, [])

  
  return (
    <div className="App">
      {
        loading ?
        <Preloader/>
        :
        <div>
          <div className="firstPage">
            <Header/>
            <div className="container">
              
              <Main date={date} setDate ={setDate} />
            </div>
          </div>
          <div className="clear">
                
              </div>
          <div className="container">
              <Sneakers/>
              <Services/>
              <Order date={date} setDate ={setDate}/>
              <Reviews/>
              <Map/>
              <Footer/>
          </div>
        </div>
      }
    </div>
  );
}

export default App;
