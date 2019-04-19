import React from 'react';
import { Text, View } from 'react-native';
import {Header, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';
import { styles } from '../styles/Style';
import Logo from '../components/Logo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

export default class AddBookScreen extends React.Component {
    render() {
      return (
        <View style={{backgroundColor: '#eee'}}>
          <Header leftComponent={ <Logo/> } centerComponent={{ text: 'Add A Book', style: { color: '#fff' } }} containerStyle={{backgroundColor:'#0BB586'}}/>
      
          
      
          <Input placeholder='Author'/>
          <Input placeholder='ISBN'/>
          <Input placeholder='Price' shake={true}/>
          <Input placeholder='Condition'/>

        </View>
      );
    }
  }