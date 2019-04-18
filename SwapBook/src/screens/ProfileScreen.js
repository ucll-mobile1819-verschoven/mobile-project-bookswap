import React from 'react';
import { Text, View, Button } from 'react-native';



export default class ProfileScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
      const { params } = navigation.state;
  
      return {
        //not gonna need nested
        title: params ? params.otherParam: 'Profile',
       // headerStyle: {
       //   backgroundColor: navigationOptions.headerTintColor,
      //  },
      //  headerTintColor: navigationOptions.headerStyle.backgroundColor,
      };
    };
    render() {
      return (
        
        <View>
          <Text>Profile Screen</Text>
         
          <Button title="Update the title" onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'}) }/>
        </View>
  
      );
    }
  }
  