import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({

//Splash screen css

  splashLogo:{
    flex: 1,
    marginBottom: 72,
    justifyContent: 'center',
    width: null,
    height: null
  },

//End splash screen css

//Begin onboarding css

  //Login/signup screen class
  standardButton:{
    marginLeft: 32,
    marginRight: 32,
    backgroundColor:"#19DD31",
    marginBottom:20,
    height: 52
  },
  standardButtonDisabled:{
    marginLeft: 32,
    marginRight:32,
    backgroundColor: "rgba(25,221,49,.5)",
    marginBottom:20,
    height:52
  },
  container:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  logoStyle:{
    flex: 1,
    justifyContent: 'center',
    width: null,
    height: null
  },
  loginForeground: {
    flex: 1,
    bottom: 0,
    flexDirection: "column",
    justifyContent: "center"
  },
  //Login/signup css

  //Gender selection css
  genderButton:{
    height:107,
    width:107,
    backgroundColor:"rgba(255,255,255,0)"
  },
  genderButtonNot:{
    height:107,
    width:107,
    backgroundColor:"rgba(255,255,255,0)"
  },
  loginForeground: {
      flex: 1,
      bottom: 0,
      flexDirection: "row",
      justifyContent: "center"
  },
  buttonTitle2Text:{
    color: "#fff",
    fontFamily: "Nunito-ExtraBold",
    fontSize: 20,
    letterSpacing: .5,
    lineHeight: 21,
    marginTop: 10
  },
  title2Text:{
    color: "#fff",
    fontFamily: "Nunito-Bold",
    fontSize: 20,
    letterSpacing: .5,
    lineHeight: 21,
    marginTop:20,
    textAlign: "center",
    bottom:0
  },
  title1TextInput:{
    color: "#fff",
    fontFamily: "Nunito-ExtraBold",
    fontSize: 26,
    lineHeight: 34,
    letterSpacing :.5,
    textAlign: "center"
  },
  mapStyle:{
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0
  },
  //Gender selection css

//End onboarding css

//Begin homescreen css

  //Logo
  logo:{
    flex: 1,
    alignSelf: 'stretch',
    resizeMode: 'contain',
    width: undefined,
    height: undefined
  },

  //Availability list
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
  //Availability toggle css
  availabilityToggle :{
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    margin: 10
  }
//End homescreen CSS

})
