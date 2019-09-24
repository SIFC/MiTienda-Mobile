// import React, { Component } from 'react';
 
// import { StyleSheet, Platform, View, Text } from 'react-native';


// export default class Home extends Component{
//       render() {
//         return (
//             <View style={styles.container}>
//                   <Text> Hola</Text>
//             </View>
//         );
//       }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// ----------------------------------------------

// --------------------------------------------------------------------- Building
import React, { Component } from 'react';
 


import { Container, Item, Input, Header, Button, 
    Title, Content, Footer, FooterTab, 
    Left, Right, Body, Icon, CardItem, Toast, 
    Spinner, H1, H2, H3, Drawer, Grid, Col, Row , Text} from 'native-base';
    import * as Font from 'expo-font';
    import Constants from 'expo-constants';
    import { Ionicons } from '@expo/vector-icons';

import { StyleSheet, Platform, View,  } from 'react-native';
export default class Home extends Component {
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
    closeControlPanel = () => {
        this._drawer.close()
      };
      openControlPanel = () => {
        this._drawer.open()
      };
    _drawer: any;
    render() {
        return (
           
            <Content>
            {/* <View style={styles.container}></View> */}
            <Grid>
              <Row>
              <Col >
                  <Button full  primary >
                    <Icon name='cube'/>
                    <Text >Productos</Text> 
                  </Button></Col>
                <Col >
                  <Button full  success >
                    <Icon name='cart'/>
                    <Text>Ventas</Text>  
                  </Button></Col>
                  </Row>
                  <Row><Col>
                  <Button  full  warning >
                    <Icon name='person'/>
                    <Text>Clientes</Text> 
                  </Button></Col>
                  <Col >
                  <Button  full  light >
                    <Icon name='cog' />
                    <Text>Perfil</Text>  
                  </Button></Col></Row>
              </Grid>
             
            </Content>

        );
    }
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});
    
