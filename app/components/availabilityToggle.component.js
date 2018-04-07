import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Switch, Alert} from 'react-native';
import { inject } from 'mobx-react';
import hangStyles from '../styles/hang.styles';

@inject("stores")
class AvailabilityToggle extends Component {

 constructor(){
   super();
   this.state ={
    SwitchOnValueHolder :  false
   }
 }

ShowAlert = (value) =>{
  this.setState({
    SwitchOnValueHolder: value
  })
  if(value == true)
  {
    //Perform any task here which you want to execute on Switch ON event.
    Alert.alert("You're Available!");
  }
  else{
    //Perform any task here which you want to execute on Switch OFF event.
    Alert.alert("C'mon, lets hang yo");
  }
}

 render() {
   return (
     <View style={hangStyles.availabilityToggle}>
       <Text style={{fontSize: 18, color: '#ffffff', fontFamily: "Nunito-ExtraBold",}}> Hang? </Text>
        <Switch
          onValueChange={(value) => this.ShowAlert(value)}
          style={{marginBottom: 50}}
          value={this.state.SwitchOnValueHolder} />
     </View>
   );
 }
}

export default AvailabilityToggle

AppRegistry.registerComponent('Hang', () => Hang);
