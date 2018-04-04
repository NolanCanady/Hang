import React, {Component} from 'react';
import {Container, Content, Text, Button, Form, Input, Item, Icon} from 'native-base';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {AppRegistry, View, Image, ImageBackground, StyleSheet, Dimensions, KeyboardAvoidingView} from 'react-native';
import {inject} from 'mobx-react';
import buttonStyles from '../styles/button.styles';


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
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

  state={
    mapRegion: null,
    lastLat: null,
    lastLong: null,
  }

  componentDidMount(){
    this.watchID = navigator.geolocation.watchPosition((position)=>{
      let region = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.03,
        longitudeDelta: 0.03,
      }
      this.onRegionChange(region,region.latitude,region.longitude);
    });
  }

  componentWillUnmount(){
    navigator.geolocation.clearWatch(this.watchID);
  }

  onRegionChange(region, lastLat, lastLong){
    this.setState({
      mapRegion: region,
      lastLat: lastLat || this.state.lastLat,
      lastLong: lastLong || this.state.lastLong
    })
  }

  render(){
    const{stores, navigation, age, firstName} = this.props
    return(
      <View style={{flex: 1}}>
        <MapView
          style={styles.map}
          region={this.state.mapRegion}
          showsUserLocation={true}
          followUserLocation={true}
          onRegionChange={this.onRegionChange.bind(this)}>

        </MapView>
      </View>
    )
  }
}

AppRegistry.registerComponent('Hang', () => Hang);
