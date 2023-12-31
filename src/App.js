import React from 'react';
 
import './App.css';
import './index.css';
import {Brand, Cta, Navbar} from './components';
import {Footer, Blog, Possibility, Features, WhatGPT3, Header} from './container';
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
