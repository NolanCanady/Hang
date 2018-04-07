import React, {Component} from 'react';
import { Image, View, StyleSheet } from 'react-native';
import {Container} from 'native-base';
import { inject } from 'mobx-react';
import hangStyles from '../styles/hang.styles';

@inject("stores")
export default class SplashScreen extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        const {stores, navigation} = this.props;
        setTimeout(()  => {
            navigation.navigate("Home")
        }, stores.config.SplashTime)
    }
    render(){
        const {stores} = this.props
        return (
          <Container>
              <View style={hangStyles.loginForeground}>
                  <Image style={hangStyles.splashLogo} source={stores.config.SplashImg}/>
              </View>
          </Container>
        )
    }
}
