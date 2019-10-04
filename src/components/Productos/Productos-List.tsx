import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text } from 'react-native';
import { Form, Container } from 'native-base';
import HeaderApp from '../HeaderApp';
import FooterProducto from '../Footer/FooterProducto';
interface Props {
    navigation: any
  }
  
export default class ProductosList extends React.Component <Props>{
      render() {
        return (
          <Container>
          {/* <HeaderApp></HeaderApp> */}
          {/* ------------------ --------------------------*/}
          {/* <View style={styles.container}>
                  <Text> Lista Productos</Text>
            </View> */}
          {/* -----------------------------------------------*/}
             <FooterProducto></FooterProducto>
        </Container>
            
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