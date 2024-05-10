import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import Banner from './components/Banner';
import Card from './components/Card';
import Button from './components/Button';
import Footer from './components/Footer';



const App = () => {
  return(
    <div>
      <NavBar />
      <Banner />
      <h1>REDSHIFT SERVICES</h1>
      <div className="decoration-line"></div>
      <div className="card-layout">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="btn-2">
        <Button title="read more"/>
      </div>
      <Footer />
    </div>
  );
}

export default App;