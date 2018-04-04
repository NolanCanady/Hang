import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  splashLogo:{
    flex: 1,
    justifyContent: 'center',
    width: null,
    height: null
  },
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
  }
})
