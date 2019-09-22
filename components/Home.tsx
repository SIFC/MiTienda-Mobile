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
 
import { StyleSheet, Platform, View, Text } from 'react-native';

import { Container, Item, Input, Header, 
    Title, Content, Footer, FooterTab, Button, 
    Left, Right, Body, Icon, CardItem, Toast, 
    Spinner, H1, H2, H3, Drawer } from 'native-base';

export default class Home extends Component {

    closeControlPanel = () => {
        this._drawer.close()
      };
      openControlPanel = () => {
        this._drawer.open()
      };
    _drawer: any;
    render() {
        return (
            <Container>
           
            <Content>
            <View style={styles.container}>
              
              <Button  large >
                <h1>Producto</h1>
              </Button>

              </View>

             
            </Content>
          </Container>
            // 
            //         <Text> Hola</Text>
            // 
            
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
    
