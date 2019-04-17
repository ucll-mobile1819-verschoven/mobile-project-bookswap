import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import Location from './components/Location';

class HomeScreen extends React.Component{  
  //static navigationOptions = {
  //  title: 'Welcome'
 // };
  render(){
    //const {navigate} = this.props.navigation;
    return(
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => this.props.navigation.navigate('Profile')}/>
      </View>
    )
  }
};

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={stsyles.flex1}>
        <Text>Details Screen</Text>
        <Button title="Go to Home" onPress={() => this.props.navigation.navigate('Home')}/>
        <Location />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
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

const styles = StyleSheet.create({
  container: {
    marginTop: '20%',
    backgroundColor: "#ffe",
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
  },
  flex1: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
  flex2: {
    flex: 2,
    backgroundColor: 'skyblue'
  },
  flex3: {
    flex: 3,
    backgroundColor: 'steelblue'
  },
});