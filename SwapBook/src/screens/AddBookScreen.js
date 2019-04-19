import React from 'react';
import { Text, View, Button } from 'react-native';
import {Header} from 'react-native-elements';
import { styles } from '../styles/Style';
import Logo from '../components/Logo';

export default class AddBookScreen extends React.Component {
    static navigationOptions = {
      title: 'Add A Book',
    };
  
    render() {
      return (
        <View style={{backgroundColor: '#eee'}}>
          <Header leftComponent={ <Logo/> } centerComponent={{ text: 'Add A Book', style: { color: '#fff' } }} style={styles.headerStyle}/>
          <Text>Add A Book</Text>
        </View>
      );
    }
  }