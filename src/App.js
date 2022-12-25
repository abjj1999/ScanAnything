
import './App.css';
import { useState } from 'react';
import Generate from './components/Generate';
import ScanByFile from './components/ScanByFile';
import ScanByweb from './components/ScanByweb';

function App() {
  return (
    <div className="bdoy">
      <h1 className='text-center text-secondary'>Everything Scan</h1>
    <div className="cards-cont row d-flex justify-content-between  ">
      <div className="col-lg-3 col-md-8 col-sm-10 card mb-5">
        <Generate />
      </div>
      <div className="col-lg-3 col-md-8 col-sm-10 card mb-5">

        <ScanByFile />
        
      </div>
      <div className="col-lg-3 col-md-8 col-sm-10 card ">
        <ScanByweb />
      </div>
      
      
    </div>
    </div>
  );
}

export default App;
