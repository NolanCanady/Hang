import React, {Component} from 'react';
import { Image, View, StyleSheet } from 'react-native';
import {Container} from 'native-base';
import { inject } from 'mobx-react';

@inject("stores")
export default class SplashScreen extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        const {stores, navigation} = this.props;
        setTimeout(()  => {
            navigation.navigate("HomeScreen")
        }, stores.config.SplashTime)
    }
    render(){
        const {stores} = this.props
        return (
          <Container>
              <View style={styles.loginForeground}>
                  <Image style={styles.logoStyle} source={stores.config.SplashImg}/>
              </View>
          </Container>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    },
    logoStyle:{
      flex: 1,
      marginBottom:72,
      justifyContent: 'center',
      width: null,
      height: null
    },
    loginForeground: {
        flex: 1,
        bottom: 0,
        flexDirection: "column",
        justifyContent: "center"
    }
})
