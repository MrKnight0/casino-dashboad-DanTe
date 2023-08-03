import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import Accordion from './components/Accordion';
import React from 'react';


function App() {


  return (
    <div>
      <Header title={'Dashboard'}/>
      <hr />
      <Sidebar />
    </div>
  );
}

export default App;