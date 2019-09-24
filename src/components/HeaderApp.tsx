
import React, { Component } from 'react';
import {  Header, Title,  Button, Left,Body, Icon,} from 'native-base';

 export default class HeaderApp extends Component {
  render() {
        return ( 
        <Header style={{ backgroundColor:"#A4A4A4"}}>
        <Left>
            <Button transparent>
            <Icon name='menu' />
            </Button>
        </Left>
        <Body>
            <Title style={{alignSelf: 'center',}}>Mi Tienda</Title>
        </Body>
        </Header >
        );
    }
}



