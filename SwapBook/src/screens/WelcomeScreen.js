import React from 'react';
import { Text, View, Button } from 'react-native';

export default class WelcomeScreen extends React.Component{  
  render(){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Tabnav')}
        />
        <Button title="Sign Up" onPress={() => alert('button pressed')} />
      </View>
    )
  }
};