import React, {Component} from 'react';
import {Button, Item, Input, Icon, Text, Form} from 'native-base';
import {observer} from 'mobx-react/native';
import {observable} from 'mobx';

@observer
export default class BackNav extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Form style={{marginTop:22}}>
        <Button style={{backgroundColor: 'rgba(52, 52, 52, 0)'}} onPress={() => props.navigation.dispatch(NavigationActions.back())}>
          <Icon style={{color:"#fff"}} name='person-outline'/>
        </Button>
      </Form>
    )
  }
}
