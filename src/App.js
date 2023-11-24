import React from 'react';
import './App.css';
import Main from './components/agency/Main';
import Header from './components/agency/Header';
import Mac from './components/agency/Mac';
import SwipeImg from './components/agency/SwipeImg';
import './components/agency/Agency.css';
import Footer from './components/agency/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Mac />
      <SwipeImg />
      <Footer />
    </>
  );
};

export default App;

