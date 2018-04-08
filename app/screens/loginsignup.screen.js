import React, { Component } from 'react';
import { Container, Content, Text, Button, Form} from 'native-base';
import { View, Image, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { inject } from 'mobx-react';
import hangStyles from '../styles/hang.styles';

@inject("stores")
export default class Loginsignup extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {stores, navigation} = this.props
        return (
            <Container style={{backgroundColor:"#ffffff"}}>
                <View style={hangStyles.loginForeground}>
                    <Image style={hangStyles.logoStyle} source={stores.config.SplashImg}/>
                    <Form style={{marginBottom:32}}>
                      <Button rounded block style={hangStyles.standardButton} onPress={() => navigation.navigate('FirstName', { age: '21' })}>
                          <Text style={hangStyles.buttonTitle2Text}>Enable Location</Text>
                      </Button>
                    </Form>
                </View>
            </Container>
        )
    }
}
