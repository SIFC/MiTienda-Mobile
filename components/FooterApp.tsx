
import React, { Component } from 'react';
import {Title, Footer, FooterTab, Button } from 'native-base';
export default class FooterApp extends Component {
render() {
        return (
            <Footer style={{ backgroundColor: "#A4A4A4" }}>
            <FooterTab style={{ backgroundColor: "#A4A4A4" }}>
            <Button full>
                <Title style={{ alignSelf:'center'}}>Footer</Title>
            </Button>
            </FooterTab>
        </Footer>
        );
    }
}



