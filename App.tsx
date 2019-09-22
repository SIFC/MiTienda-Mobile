
import React, { Component } from 'react';
import Home from './components/Home'
import HeaderApp from './components/HeaderApp'
import FooterApp from './components/FooterApp'
import { Container, Item, Input, Header, 
  Title, Content, Footer, FooterTab, Button, 
  Left, Right, Body, Icon, CardItem, Toast, 
  Spinner, H1, H2, H3, View,Text  } from 'native-base';
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



