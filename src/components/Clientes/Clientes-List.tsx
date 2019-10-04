import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text } from 'react-native';
import { Form } from 'native-base';
interface Props {
    navigation: any
  }
  
export default class ClientesList extends React.Component <Props>{
      render() {
        return (
            <View style={styles.container}>
                  <Text> Lista Clientes</Text>
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