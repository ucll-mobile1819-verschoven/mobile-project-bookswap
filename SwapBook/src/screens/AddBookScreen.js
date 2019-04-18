import React from 'react';
import { Text, View, Button } from 'react-native';

export default class AddBookScreen extends React.Component {
    static navigationOptions = {
      title: 'Add A Book',
    };
  
    render() {
      return (
        <View style={{backgroundColor: '#eee'}}>
          <Text>Add A Book</Text>
          <Button title="Go to Home" onPress={() => this.props.navigation.goBack()}/>
        </View>
      );
    }
  }