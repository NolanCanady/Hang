import React, {Component} from 'react';
import { Image, View, StyleSheet } from 'react-native';
import {Container} from 'native-base';
import { inject } from 'mobx-react';
import hangStyles from '../styles/hang.styles';
import Animation from 'lottie-react-native';

import anim from '../../assets/hangSplash.json';

@inject("stores")
export default class SplashScreen extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        const {stores, navigation} = this.props;
        setTimeout(()  => {
            navigation.navigate("LoginSignup")
        }, stores.config.SplashTime);
        this.animation.play();
    }
    render(){
        const {stores} = this.props
        return (
          <Container>
              <View style={hangStyles.loginForeground}>
                  //<Image style={hangStyles.splashLogo} source={stores.config.SplashImg}/>
                  <Animation
                    ref={animation => {
                      this.animation = animation;
                    }}
                    style={{
                      width: 80,
                      height: 80
                    }}
                    loop={true}
                    source={anim}
                    />
              </View>
          </Container>
        )
    }
}
