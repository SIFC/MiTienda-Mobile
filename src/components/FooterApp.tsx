
import React, { Component } from 'react';
import {Title, Footer, FooterTab, Button } from 'native-base';
import Constants from 'expo-constants';
export default class FooterApp extends Component {
render() {
        return (
            <Footer style={{ backgroundColor: "#A4A4A4" }}>
            <FooterTab style={{ backgroundColor: "#A4A4A4" }}>
            <Button full>
                <Title style={{ alignSelf:'center'}}> {Constants.installationId }</Title>
            </Button>
            </FooterTab>
        </Footer>
        );
    }
}



