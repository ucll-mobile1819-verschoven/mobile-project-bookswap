import React from 'react';
import { Text, View, Button } from 'react-native';
import {Header} from 'react-native-elements';
import { styles } from '../styles/Style';
import Logo from '../components/Logo';

export default class Registerscreen extends React.Component{  
  render(){
    return(
      <View>
        <Header leftComponent={ <Logo/> } centerComponent={{ text: 'Register', style: { color: '#fff' } }} containerStyle={{backgroundColor:'#0BB586'}}/>
        <Button title="Register" onPress={() => alert('button pressed')} color="#144D82"/>
        <Button title="Back" onPress={() => this.props.navigation.navigate('Welcome')} color="#0BB586"/>
     
      </View>
    )
  }
};