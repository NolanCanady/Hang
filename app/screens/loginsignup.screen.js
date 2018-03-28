import React, { Component } from 'react';
import { Container, Content, Text, Button, Form} from 'native-base';
import { View, Image, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { inject } from 'mobx-react';
import buttonStyles from '../styles/button.styles';

@inject("stores")
export default class AgeScreen extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {stores, navigation} = this.props
        return (
            <Container style={{backgroundColor:"#ffffff"}}>
                <View style={styles.loginForeground}>
                    <Image style={styles.logoStyle} source={stores.config.SplashImg}/>
                    <Form style={{marginBottom:32}}>
                      <Button rounded block style={buttonStyles.standardButton} onPress={() => navigation.navigate('FirstName', { age: '21' })}>
                          <Text style={buttonStyles.buttonTitle2Text}>Enable Location</Text>
                      </Button>
                    </Form>
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
