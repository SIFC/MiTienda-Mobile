import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text } from 'react-native';
import { Form } from 'native-base';
interface Props {
    navigation: any
  }
  
export default class ProductosList extends React.Component <Props>{
      render() {
        return (
            <View style={styles.container}>
                  <Text> Lista Productos</Text>
            </View>
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