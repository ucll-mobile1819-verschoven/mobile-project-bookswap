import React from 'react';
import { Text, View, Button } from 'react-native';
import {Header} from 'react-native-elements';
import { styles } from '../styles/Style';
import Logo from '../components/Logo';

export default class Registerscreen extends React.Component{  
  render(){
    return(
      <View>
        <Header leftComponent={ <Logo/> } centerComponent={{ text: 'Register', style: { color: '#fff' } }} style={styles.headerStyle}/>
        <Button title="Register" onPress={() => alert('button pressed')} />
        <Button title="Back" onPress={() => this.props.navigation.navigate('Welcome')}/>
     
      </View>
    )
  }
};