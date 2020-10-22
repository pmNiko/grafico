import React from 'react';
import Grafico from './components/Grafico';
import Nav from './common/Nav';

function App() {
  return (
    <>
      <Nav/>
      <div className="row">
        <div className="col-10 m-auto">
          <Grafico/>
        </div>      
      </div>

    </>
  );
}

export default App;
