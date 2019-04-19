import React from 'react';
import { Text, View, Button } from 'react-native';
import {Header} from 'react-native-elements';
import { styles } from '../styles/Style';
import Logo from '../components/Logo';

export default class WelcomeScreen extends React.Component{  
  render(){
    let display = "none"
    const { params } = this.props.navigation.state;
    const success = params ? params.success : null;
    if (success!=null){
        display = "flex"
    }
//const display = success ? "none" : "flex";

    return(
      <View>
        <Header leftComponent={ <Logo/> } centerComponent={{ text: 'Welcome to Swapbook', style: { color: '#fff' } }} containerStyle={{backgroundColor:'#0BB586'}}/>
       <View  style={styles.border}>
       {/*<Text style={{display}}>{JSON.stringify(success)}</Text>*/}
       <View style={{display}}><Button title="Great job! You can now login!" onPress={() => this.props.navigation.navigate('Tabnav')} color='#0BB586' backgroundColor='transparant'/></View>
       
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Tabnav')}
          color="#0BB586"
        />
         <View style={{marginTop: 5, borderRadius: 5}}>
        <Button title="Sign Up" onPress={() => this.props.navigation.navigate('Register')} color='#0BB586' backgroundColor='transparant'/>
        </View>
        </View>
      </View>
    )
  }
};