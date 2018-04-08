import React, { Component } from 'react';
import { AppRegistry, Image, View, Text, Button, Alert, Dimensions, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import { inject } from 'mobx-react';
import AvailabilityToggle from '../components/availabilityToggle.component';
import HomeScreen from '../screens/home.screen';

@inject("stores")
export default class HomeNav extends Component {

  _onPressButton() {
  HomeScreen.settingsWindow();

}


  constructor(){
    super();
}


 render() {
   const{stores, navigation, age} = this.props
     return (
        <View style={styles.container}>
        <TouchableOpacity onPress={() => this.refs.modal3.open()}>

          <View style={styles.button}>
          <Image style={styles.buttonImg} source={stores.config.settingsicon}/>
          </View>
        </TouchableOpacity>
         <Image style={styles.logo} source={stores.config.logo}/>
         <TouchableOpacity onPress={this._onPressButton}>
           <View style={styles.button}>
           <Image style={styles.buttonImg} source={stores.config.addicon}/>
           </View>
         </TouchableOpacity>
       </View>

     );
 }
}



const styles = StyleSheet.create({

  container:{
    marginTop: 54,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignSelf: 'stretch',
    // resizeMode: 'contain',
  },
  logo:{
    // alignSelf: 'stretch',
    // resizeMode: 'contain',
    width: 40,
    height: 32,
  },
  button: {
     marginLeft: 12,
     marginRight: 12,
     width: 25,
     alignItems: 'center',
     backgroundColor: 'rgba(0, 0, 0, 0)'
   },
   buttonImg: {
    width: 25,
    height: 25,
   },

})

AppRegistry.registerComponent('Hang', () => Hang);
