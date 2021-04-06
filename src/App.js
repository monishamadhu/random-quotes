import React from 'react';

import './App.css';
import RandomQuotes from './QuotesComponent';
import { FadeTransform } from 'react-animation-components';

function App() {
  return (
    <div className="App">
       <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(50%)'
                }}>
      <RandomQuotes/>
      </FadeTransform>
    </div>
  );
}

export default App;
