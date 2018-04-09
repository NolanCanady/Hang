import React, {Component} from 'react';
import {Container, Content, Text, Button, Form, Input, Item, Icon} from 'native-base';
<<<<<<< HEAD
import {AppRegistry, View, Image, ImageBackground, ScrollView, Alert, StatusBar, FlatList, SectionList, Switch, StyleSheet, Dimensions, KeyboardAvoidingView} from 'react-native';
=======
import {AppRegistry, View, Image, ImageBackground, FlatList, SectionList, Switch, StyleSheet, Dimensions, KeyboardAvoidingView} from 'react-native';

//For simple table view - may delete
import {Cell, Section,TableView} from 'react-native-tableview-simple';

>>>>>>> 4449d8f7d359291ee8d38c306f331b41d9842607
import {inject} from 'mobx-react';
import hangStyles from '../styles/hang.styles';
import BackNav from '../components/hangbutton.component';
import AvailabilityToggle from '../components/availabilityToggle.component';
import HomeNav from '../components/homeNav.component';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Modal from 'react-native-modalbox';
var screen = Dimensions.get('window');


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
    super(props);
    this.state={
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      editedText: true
<<<<<<< HEAD

    }

=======
    };
>>>>>>> 4449d8f7d359291ee8d38c306f331b41d9842607
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

  static settingsWindow(id) {
  this.refs.modal.open();

}

  render(){
    const{stores, navigation} = this.props
    return(
      <View style={{flex: 1}}>
      <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <Modal style={styles.modal3} position={"center"} ref={(modal) => this.settingsWindow = modal} isDisabled={this.state.isDisabled}>
            <Image source={stores.config.swipeicon}/>
            <Text style={styles.text}>Notifications</Text>
          </Modal>
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
<<<<<<< HEAD
          <HomeNav/>
=======
          <View style={{flex:.3, marginTop: 35}}>
            <Image style={hangStyles.logo} source={stores.config.logo}/>
          </View>
>>>>>>> 4449d8f7d359291ee8d38c306f331b41d9842607

          //List options
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Button rounded block style={hangStyles.listOptionsBG} onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={hangStyles.listOptions}>Friends</Text>
            </Button>
            <Button rounded block style={hangStyles.listOptionsBG} onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={hangStyles.listOptions}>Nearby</Text>
            </Button>
          </View>

          //Friends list
          <View style={{flex:5}}>
            <SectionList style={hangStyles.list}
              sections={[
                {title: 'Available', data: ['Andrew Sibert']},
                {title: 'Unavailable', data: ['Joe Kennedy', 'Nolan Canady', 'Anja']},
              ]}
              renderItem={({item}) => <Text style={hangStyles.itemText}>{item}</Text>}
              renderSectionHeader={({section}) => <Text style={hangStyles.sectionHeader}>{section.title}</Text>}
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

<<<<<<< HEAD
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
    fontSize: 26,
    paddingTop: 18,
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

  modal3: {
    flex:1,
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 16,
    paddingTop: 16,
    height: 300,
    width: 300
  },
})
=======
>>>>>>> 4449d8f7d359291ee8d38c306f331b41d9842607

AppRegistry.registerComponent('Hang', () => Hang);
