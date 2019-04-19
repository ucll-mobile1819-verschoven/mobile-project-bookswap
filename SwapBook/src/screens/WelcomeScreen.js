import React from 'react';
import { Text, View, Button } from 'react-native';
import {Header} from 'react-native-elements';
import { styles } from '../styles/Style';
import Logo from '../components/Logo';

export default class WelcomeScreen extends React.Component{  
  render(){
    return(
      <View>
        <Header leftComponent={ <Logo/> } centerComponent={{ text: 'Welcome to Swapbook', style: { color: '#fff' } }} containerStyle={{backgroundColor:'#0BB586'}}/>
       <View  style={{borderWidth: 2, borderColor:'#0BB586', borderRadius:5, margin:5, padding: 5}}>
       <Text>INVULLEN</Text>
       <Text>INVULLEN</Text>
       <Text>INVULLEN</Text>
       <Text>INVULLEN</Text>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Tabnav')}
          color="#0BB586"
        />
         <View style={{marginTop: 5, borderRadius: 5}}>
        <Button title="Register" onPress={() => this.props.navigation.navigate('Register')} color='#0BB586' backgroundColor='transparant'/>
        </View>
        </View>
      </View>
    )
  }
};