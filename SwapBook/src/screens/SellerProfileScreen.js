import React from 'react';
import { Text, View, Button } from 'react-native';
import Location from '../components/Location';
import {Header} from 'react-native-elements';
import Logo from '../components/Logo';
import { styles } from '../styles/Style';
//modal -- "popup"  When cliking on a book it will show the info of the seller
export default class SellerProfileScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#164050',
    },
    headerTintColor: 'orange',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    title: 'Seller Profile',
  };
  render(){
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;
    return (
      <View>
        <Header leftComponent={ <Logo/> } centerComponent={{ text: 'Info Book', style: { color: '#fff' } }} containerStyle={{backgroundColor:'#0BB586'}}/>
        <Button onPress={()=> this.props.navigation.goBack()} title='Go Back' color="#0BB586"/>
        <Text>Info of the seller will be put on this page</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Name Book</Text>
        <Text>Name of the Seller</Text>
        <Text>Price</Text>
        <Text>...</Text>
        <Location />
      </View>
    );
  }
}
