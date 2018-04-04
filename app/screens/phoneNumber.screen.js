import React, {Component} from 'react';
import {Container, Content, Text, Button, Form, Input, Item, Icon} from 'native-base';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {AppRegistry, View, Image, ImageBackground, StyleSheet, Dimensions, KeyboardAvoidingView} from 'react-native';
import {inject} from 'mobx-react';
import buttonStyles from '../styles/button.styles';
//import BackNav from '../components/hangbutton.component';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

@inject("stores")
export default class PhoneNumberScreen extends Component{
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
    const{stores, navigation, age} = this.props
    return(
      <View style={{flex: 1}}>
        <MapView
          style={styles.map}
          region={this.state.mapRegion}
          showsUserLocation={true}
          followUserLocation={true}
          onRegionChange={this.onRegionChange.bind(this)}>

        </MapView>
        <Container style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>


        //Back button
        <Form style={{marginTop:27}}>
          <Button style={{backgroundColor: 'rgba(52, 52, 52, 0)'}} onPress={() => navigation.goBack()}>
            <Icon style={{color:"#fff"}} name='person-outline'/>
          </Button>
        </Form>
        //First Name Input
        <View style={buttonStyles.loginForeground}>
          <Form style={{marginTop:16}}>
            <Text style={buttonStyles.title2Text}>What''s your phone number?</Text>
            <Item>
              <Input style={buttonStyles.title1TextInput} keyboardType={'numeric'} placeholder='Phone Number' autoCapitalize='none' placeholderTextColor="#fff" onChangeText={(phoneNumber) => this.phoneNumber = phoneNumber, (Value) => this.setState({editedText:false})}/>
            </Item>
          </Form>
        </View>
          <KeyboardAvoidingView style={{bottom:32}} behavior="padding">
              <Button disabled={this.state.editedText} rounded block style={this.state.editedText ? buttonStyles.standardButtonDisabled : buttonStyles.standardButton} onPress={() => navigation.navigate('MapTest', { age: '21', firstName: this.firstname, lastName:this.lastName, gender:this.gender, phoneNumber:this.phoneNumber })}>
                <Text style={buttonStyles.buttonTitle2Text}>Next</Text>
              </Button>
          </KeyboardAvoidingView>
      </Container>
      </View>
    )
  }
}
