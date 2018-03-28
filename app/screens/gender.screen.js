import React, {Component} from 'react';
import {Container, Content, Text, Button, Form, Input, Item, Icon} from 'native-base';
import {View, Image, ImageBackground, StyleSheet, Dimensions, KeyboardAvoidingView} from 'react-native';
import {inject} from 'mobx-react';
import buttonStyles from '../styles/button.styles';
import BackNav from '../components/hangbutton.component';

@inject("stores")
export default class GenderScreen extends Component{
  constructor(props){
    super(props)
    this.state={
      picking: true,
      male: false,
      female: false,
      other: false,
      gender: "na"
    }
  }
  render(){
    const{stores, navigation, age, firstName, lastName} = this.props
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
            <Text style={buttonStyles.title2Text}>Which one are you?</Text>
            <View style={{flex:1, flexDirection:"row", justifyContent:"space-between", marginTop:22}}>
              <Button block style={[this.state.picking ?  buttonStyles.genderButton: (this.state.male ? buttonStyles.genderButton : buttonStyles.genderButtonNot), {marginRight:11}]} onPress={(Value) => this.setState({picking:false,female:false,male:true,other:false,gender:"male"})}>
                <Image style={this.state.picking ? {flex:1} : (this.state.male ? {flex:1}:{flex:1,opacity:.4})} source={stores.config.BoySymbol}/>
              </Button>
              <Button block style={[this.state.picking ?  buttonStyles.genderButton : (this.state.female ? buttonStyles.genderButton : buttonStyles.genderButtonNot), {marginRight:11}]} onPress={(Value)=> this.setState({picking:false,female:true,male:false,other:false,gender:"female"})}>
                <Image style={this.state.picking ? {flex:1} : (this.state.female ? {flex:1}:{flex:1,opacity:.4})} source={stores.config.GirlSymbol}/>
              </Button>
              <Button block style={this.state.picking ?  buttonStyles.genderButton: (this.state.other ? buttonStyles.genderButton : buttonStyles.genderButtonNot)} onPress={(Value)=> this.setState({picking:false,female:false,male:false,other:true,gender:"other"})}>
                <Image style={this.state.picking ? {flex:1} : (this.state.other ? {flex:1}:{flex:1,opacity:.4})} source={stores.config.OtherSymbol}/>
              </Button>
            </View>
          </Form>
        </View>
          <KeyboardAvoidingView style={{bottom:32}} behavior="padding">
              <Button disabled={this.state.picking} rounded block style={this.state.picking ? buttonStyles.standardButtonDisabled : buttonStyles.standardButton} onPress={() => navigation.navigate('PhoneNumber', { age: '21', firstName: this.firstname, lastName:this.lastName, gender:this.gender })}>
                <Text style={buttonStyles.buttonTitle2Text}>Next</Text>
              </Button>
          </KeyboardAvoidingView>
      </Container>
      </ImageBackground>
    )
  }
}
