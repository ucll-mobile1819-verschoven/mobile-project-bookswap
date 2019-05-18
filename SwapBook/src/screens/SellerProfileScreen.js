import React from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import Location from '../components/Location';
import {Header} from 'react-native-elements';
import Logo from '../components/Logo';
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../styles/Style';


export default class SellerProfileScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#164050',
    },
    headerTintColor: 'orange',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    title: 'Book',
  };
  render(){
    const { params } = this.props.navigation.state;
    const sellerId = params ? params.sellerId : null;
    return (
      <View>
        <Header leftComponent={ <Icon name="ios-arrow-back" color={'#fff'} size={30} onPress={()=> this.props.navigation.goBack()} title='Go Back'/> } 
                centerComponent={{ text: 'Info Seller', style: { color: '#fff' } }} 
                containerStyle={{backgroundColor:'#0BB586'}}/>        
        <Text>Info of the seller will be put on this page</Text>
        <Text>Name Seller</Text>
        <Text>email seller</Text>

        <Location />
      </View>
    );
  }
}
