import React from 'react';
import { Text, View, Button } from 'react-native';
import {Header} from 'react-native-elements';
import { styles } from '../styles/Style';
import Logo from '../components/Logo';

export default class WelcomeScreen extends React.Component{  
  render(){
    return(
      <View>
        <Header leftComponent={ <Logo/> } centerComponent={{ text: 'Welcome to Swapbook', style: { color: '#fff' } }} style={styles.headerStyle}/>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Tabnav')}
        />
        <Button title="Register" onPress={() => this.props.navigation.navigate('Register')}/>
      </View>
    )
  }
};