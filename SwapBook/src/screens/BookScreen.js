import React from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../styles/Style';


export default class BookScreen extends React.Component {
  
 


  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#164050',
    },
    headerTintColor: 'orange',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    title: 'Book',
    //here get all data of the book by the id of the book???
  };
  render(){
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;
    const title = params ? params.title : null;
    return (
      <View>
        <Header leftComponent={ <Icon name="ios-arrow-back" color={'#fff'} size={30} onPress={()=> this.props.navigation.goBack()} title='Go Back'/> } 
                centerComponent={{ text: 'Info Book', style: { color: '#fff' } }} 
                containerStyle={{backgroundColor:'#0BB586'}}/>        
        <Text>Info of the seller will be put on this page</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Name Book</Text>
        <Text>Name of the Seller</Text>
        <Text>Price</Text>
        

        <Button title='seller' onPress={() => this.props.navigation.navigate('SellerProfile', {sellerId:  }) } color="#0BB586"/>
      </View>
    );
  }
}

//in seller button give the seller of this book with it
