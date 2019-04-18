import React from 'react';
import { Text, View, Button } from 'react-native';

import Location from '../components/Location';

export default class ProfileScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
      const { params } = navigation.state;
  
      return {
        //not gonna need nested
        title: params ? params.otherParam: 'A nested Profile Screen',
        headerStyle: {
          backgroundColor: navigationOptions.headerTintColor,
        },
        headerTintColor: navigationOptions.headerStyle.backgroundColor,
      };
    };
    render() {
      const { params } = this.props.navigation.state;
      const itemId = params ? params.itemId : null;
      const otherParam = params ? params.otherParam : null;
      return (
        <View>
          <Text>Profile Screen</Text>
          <Text>itemId: {JSON.stringify(itemId)}</Text>
          <Text>otherParam: {JSON.stringify(otherParam)}</Text>
          <Button title="Go to Home" onPress={() => this.props.navigation.goBack()}/>
          <Button title="Update the title" onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'}) }/>
          <Location />
        </View>
      );
    }
  }
  