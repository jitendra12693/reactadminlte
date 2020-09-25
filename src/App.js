import React from 'react';
import './App.css';
import Footer from './shared/Footer';
import Header from './shared/Header';
import SideBar from './shared/SideBar';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <SideBar />
      <Footer />
    </div>
  );
}

export default App;
