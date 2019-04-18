import React from 'react';
import { Text, View, Button } from 'react-native';

//modal -- "popup"  When cliking on a book it will show the info of the seller
export default class SellerProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Seller Profile',
  };
  render(){
    return (
      <View>
        <Text>This is a modal -- And it will show the info of the seller of the book you clicked</Text>
        <Button onPress={()=> this.props.navigation.goBack()} title='Go Back'/>
        <Text>Info of the seller will be put on this page</Text>
      </View>
    );
  }
}
