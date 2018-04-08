/*import React, {Component} from 'react';
import { View, SectionList, StyleSheet, Text } from 'react-native';
import {inject} from 'mobx-react';
import hangStyles from '../styles/hang.styles';
import FriendsListRow from './friendsListRow.component';

@inject("stores")
class FriendsListView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const{stores, navigation} = this.props
    return (
      <SectionList style={hangStyles.list}
        sections={[
          {title: 'Available', data: ['Andrew Sibert']},
          {title: 'Unavailable', data: ['Joe Kennedy', 'Nolan Canady', 'Anja']},
        ]}
        renderItem={({item}) => <FriendsListRow>{item}</FriendsListRow>}
        renderSectionHeader={({section}) => <Text style={hangStyles.sectionHeader}>{section.title}</Text>}
        keyExtractor={(item, index) => index}>
      </SectionList>
    )
  }
}

export default FriendsListView;*/
