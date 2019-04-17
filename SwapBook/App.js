import React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import Location from './src/components/Location';
import {styles} from './src/styles/Style';

class HomeScreen extends React.Component{  
  render(){
    return(
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="Go to Profile" onPress={() => this.props.navigation.navigate('Profile')}/>
      <Button title="Go To Settings" onPress={() => this.props.navigation.navigate('Settings')}/>
      </View>
    )
  }
};

class ProfileScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Details Screen</Text>
        <Button title="Go to Home" onPress={() => this.props.navigation.navigate('Home')}/>
        <Location />
      </View>
    );
  }
}


class SettingsScreen extends React.Component {
  //werkt niet, wss ook niet maken
  switchTheme = (darkTheme) => {
    if (darkTheme == null){
      console.log("initialize")
      darkTheme = true;
    } else{
      darkTheme = !darkTheme;
      console.log("swap")
    }
    console.log(darkTheme);
  }

  render() {
    let darkTheme;
    return (
      <View style={{backgroundColor: '#eee'}}>
        <Text>Settings</Text>
        <Button title="Go to Home" onPress={() => this.props.navigation.goBack()}/>
        {/*<Button title="Switch Theme" onPress={() => this.switchTheme(darkTheme)}/>*/}
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
    Settings: SettingsScreen,
  },
  {
    initialRouteName: "Home",
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
