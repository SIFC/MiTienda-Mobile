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
import { StyleSheet, Platform, View, SafeAreaView,  } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
interface Props {
  navigation: any
}
function Separator() {
  return <View style={styles.separator} />;
}

export default class Home extends Component {

  static navigationOptions = {
    title : "Home"
  }

  constructor(props) {
    super(props);
  }

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
       

         <SafeAreaView style={styles.container}>
            <Separator />
            <View >
            <Grid>
              <Row>
              <Col style={{ backgroundColor: '#635DB7', height: 200 }}>
                  <Button full  primary  style={{height:"100%" }} onPress={()=> this.props.navigation.navigate("Detail")}>
                    <Icon name='cube'/>
                    <Text >Productos</Text> 
                  
                  </Button></Col>
                <Col style={{ backgroundColor: '#635DB7', height: 200 }}>
                  <Button full  success style={{height:"100%"  }}>
                    <Icon name='cart'/>
                    <Text>Ventas</Text>  
                  </Button></Col>
                  </Row>
                  <Row><Col style={{ backgroundColor: '#635DB7', height: 200 }}>
                  <Button  full  warning style={{height:"100%" }}>
                    <Icon name='person'/>
                    <Text>Clientes</Text> 
                  </Button></Col>
                  <Col style={{ backgroundColor: '#635DB7', height: 200 }}>
                  <Button  full  light style={{height:"100%" }}>
                    <Icon name='cog' />
                    <Text>Perfil</Text>  
                  </Button></Col></Row>
              </Grid>
              </View>
              <Separator />
              </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#ffff',
        // alignItems: 'center',
        justifyContent: 'center',
        // height: "100%",
        //  marginVertical: 16,
         marginHorizontal: 16,
        marginTop: "10%",
        // paddingHorizontal: 10
         
      },
      title: {
        textAlign: 'center',
        marginVertical: 8,
      },
     
      separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      
});

class DetailScreen extends React.Component {

  // create the title for the screen
  static navigationOptions = {
    title : "Details"
  }

  // create constructor to get access to props
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detail Screen Stack Navigation Sample</Text>
      </View>
    );
  }
}

// newFunction();
// function newFunction() {
//   export default createStackNavigator({
//     Home: {
//       screen: HomeScreen,
//     },
//     Detail: {
//       screen: DetailScreen,
//     },
//   });
// }

