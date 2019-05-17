import React from 'react';
import { Text, View, Button } from 'react-native';
import {Header} from 'react-native-elements';
import Logo from '../components/Logo';
import { styles } from '../styles/Style';


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
      //<Button title="Update the title" onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'}) } color="#0BB586"/>
      };
    };
    render() {
      return (
        <View>
          <Header leftComponent={ <Logo/> } centerComponent={{ text: 'My Profile', style: { color: '#fff' } }} containerStyle={{backgroundColor:'#0BB586'}  }/>
        
          <Text>Profile Screen</Text>
         
          <Button title="Logout" onPress={() => this.props.navigation.navigate('Welcome') } color="#0BB586"/>
        </View>
  
      );
    }
  }
  