import React from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Button from "./components/Button";
import Footer from "./components/Footer";
import dummyData from "./assets/data.json";

const App = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <h1>REDSHIFT SERVICES</h1>
      <div className="decoration-line"></div>
      <div className="card-layout">
        {dummyData["services"].map((content) => (
          <Card title={content.title} paragraph={content.paragraph} />
        ))}
      </div>
      <div className="btn-2">
        <Button title="read more" />
      </div>
      <Footer />
    </div>
  );
};

export default App;
