import React, {Component} from 'react';
import {Container, Content, Text, Button, Form, Input, Item, Icon} from 'native-base';
import {View, Image, ImageBackground, StyleSheet, Dimensions, KeyboardAvoidingView} from 'react-native';
import {inject} from 'mobx-react';
import buttonStyles from '../styles/button.styles';
import BackNav from '../components/hangbutton.component';

@inject("stores")
export default class PhoneNumberScreen extends Component{
  constructor(props){
    super(props)
    this.state={
      editedText: true
    }
  }
  render(){
    const{stores, navigation, age} = this.props
    return(
      <ImageBackground style={{flex:1, width: null, height:null}} source={stores.config.MapBG}>
      <Container>

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
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({

})
