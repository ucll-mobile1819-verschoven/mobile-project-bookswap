import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text>Home</Text>
        <Button title="Profile" onPress={() => this.props.navigation.navigate('Profile')}/>
        <Button title="Home" onPress={() => this.props.navigation.push('Home')}/>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Profile</Text>
      <Button title="Home" onPress={() => this.props.navigation.navigate('Home')}/>
      <Button title="Back" onPress={() => this.props.navigation.goBack()}/>
    </View>
    );
  }
}


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,  
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component{
  render()
{
  return <AppContainer />;
}}


