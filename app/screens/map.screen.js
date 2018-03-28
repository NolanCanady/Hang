import React, {Component} from 'react';
import {Container, Content, Text, Button, Form, Input, Item, Icon} from 'native-base';
import {View, Image, ImageBackground, StyleSheet, Dimensions, KeyboardAvoidingView} from 'react-native';
import {inject} from 'mobx-react';
import buttonStyles from '../styles/button.styles';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

@inject("stores")
export default class MapScreen extends Component{
  constructor(props){
    super(props)
    this.state={
      editedText: true
    }
  }
  render(){
    const{stores, navigation, age, firstName} = this.props
    return(
      <View stlye={styles.container}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      </View>
    )
  }
}
