
import React, { Component } from 'react';
import Home from './src/components/Home'
import HeaderApp from './src/components/HeaderApp'
import FooterApp from './src/components/FooterApp'
import { Container } from 'native-base';
import { Constants } from 'expo';

 export default class App extends Component {
  render() {
    return (
      <Container>
        <HeaderApp></HeaderApp>
        {/* ------------------Home --------------------------*/}
        <Home></Home>
          {/* -----------------------------------------------*/}
        <FooterApp></FooterApp>
      </Container>
    );
}
 
}



