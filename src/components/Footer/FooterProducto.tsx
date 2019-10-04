import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class FooterProducto extends Component {
    render() {
        return (
           
            <Footer style={{ backgroundColor: "#A4A4A4" }}>
                <FooterTab>
                    <Button vertical>
                        <Icon name="apps" />
                        <Text>Apps</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="camera" />
                        <Text>Camera</Text>
                    </Button>
                    <Button vertical active>
                        <Icon active name="navigate" />
                        <Text>Navigate</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="person" />
                        <Text>Contact</Text>
                    </Button>
                </FooterTab>
            </Footer>);
    }
}
