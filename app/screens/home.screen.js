import React, {Component} from 'react';
import {Container, Content, Text, Button, Form, Input, Item, Icon} from 'native-base';
import {AppRegistry, View, Image, ImageBackground, FlatList, SectionList, Switch, StyleSheet, Dimensions, KeyboardAvoidingView} from 'react-native';
//For simple table view - may delete
import {Cell, Section,TableView} from 'react-native-tableview-simple';
import {inject} from 'mobx-react';
import buttonStyles from '../styles/button.styles';
import BackNav from '../components/hangbutton.component';
import AvailabilityToggle from '../components/availabilityToggle.component';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

@inject("stores")
export default class HomeScreen extends Component{
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

        //Map background
        <MapView
          style={styles.map}
          region={this.state.mapRegion}
          showsUserLocation={true}
          followUserLocation={true}
          onRegionChange={this.onRegionChange.bind(this)}>
        </MapView>

        //UI container
        <Container style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>

          //Logo
          <View style={{flex:.3, marginTop: 35}}>
            <Image style={availabilityListStyles.logo} source={stores.config.logo}/>
          </View>

          //List options
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Button rounded block style={availabilityListStyles.listOptionsBG} onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={availabilityListStyles.listOptions}>Friends</Text>
            </Button>
            <Button rounded block style={availabilityListStyles.listOptionsBG} onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={availabilityListStyles.listOptions}>Nearby</Text>
            </Button>
          </View>

          //Friends list
          <View style={{flex:5}}>
            <SectionList style={availabilityListStyles.list}
              sections={[
                {title: 'Available', data: ['Andrew Sibert']},
                {title: 'Unavailable', data: ['Joe Kennedy', 'Nolan Canady', 'Anja']},
              ]}
              renderItem={({item}) => <Text style={availabilityListStyles.itemText}>{item}</Text>}
              renderSectionHeader={({section}) => <Text style={availabilityListStyles.sectionHeader}>{section.title}</Text>}
              keyExtractor={(item, index) => index}>
            </SectionList>
          </View>

          //Availability toggle
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <AvailabilityToggle
              onValueChange={(value) => this.ShowAlert(value)}
              style={{marginBottom: 10}}
              value={this.state.SwitchOnValueHolder} />
          </View>
        </Container>
      </View>
    )
  }
}

//page styles
const availabilityListStyles = StyleSheet.create({
  logo:{
    flex: 1,
    alignSelf: 'stretch',
    resizeMode: 'contain',
    width: undefined,
    height: undefined,
  },
  listOptions: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 18,
    paddingTop: 10,
    color: '#ffffff'
  },
  listOptionsBG: {
    margin: 10,
    backgroundColor: 'rgba(0,0,0,.0)'
  },
  itemText: {
    fontFamily: "Nunito-ExtraBold",
    color: '#000000',
    backgroundColor: '#ffffff',
    padding: 10,
    marginLeft: 25,
    marginRight: 25,
    flex: 1,
    borderRadius: 20
  },
  sectionHeader:{
    fontFamily: "Nunito-ExtraBold",
    padding: 10,
    marginLeft: 25,
    marginRight: 25,
    color: '#ffffff',
  },
})


AppRegistry.registerComponent('Hang', () => Hang);
