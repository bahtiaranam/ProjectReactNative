/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Judul from './Components/Judul';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <View>
        <Judul/>
        <Image source={require('./image1.jpg')} style={{width:300 , height:400}}/>
        <Text style={styles.welcome}>Nama : Muhamad Bahtiar Anam</Text>
        <Text style={styles.welcome}>Kelas  : XI RPL 1</Text>
        <Text style={styles.welcome}>No       : 21</Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00CED1',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'left',
    color: '#696969',
    margin: 10,
  },
});
