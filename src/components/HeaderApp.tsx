
import React, { Component } from 'react';
import {  Header, Title,  Button, Left,Body, Icon, Container,Text} from 'native-base';

 export default class HeaderApp extends Component {
  render() {
        return ( 

                // <Header>
                //     <Button transparent>
                //         <Icon name='ios-arrow-back' />
                //     </Button>
                    
                //     <Title>Header</Title>
                    
                //     <Button transparent>
                //         <Icon name='ios-menu' />
                //     </Button>
                // </Header>
           
        <Header style={{ backgroundColor:"#A4A4A4"}}>
        <Left>
            <Button transparent>
            <Icon name='menu' />
            </Button>
        </Left>
        <Body>
        {/* style={{alignSelf: 'center',}} */}
            <Title >Mi Tienda</Title>
        </Body>
        </Header >
        );
    }
}



