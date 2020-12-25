import React from 'react';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

import Global from './theme/global';


function App() {
  return (
    <React.Fragment>
      <Header/>
      <Global/>
      <Content/>
      <Footer/>
    </React.Fragment>
    
  );
}

export default App;
