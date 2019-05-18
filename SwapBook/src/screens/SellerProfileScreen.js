import React from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import Location from '../components/Location';
import {Header} from 'react-native-elements';
import Logo from '../components/Logo';
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../styles/Style';

import { db } from '../config/db';

let itemsRef = db.ref('/seller');

export default class SellerProfileScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        items: [],
    };
  }

  componentDidMount() {
    itemsRef.on('value', (snapshot) => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({items});
    })
}


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
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;
    return (
      <View>
        <Header leftComponent={ <Icon name="ios-arrow-back" color={'#fff'} size={30} onPress={()=> this.props.navigation.goBack()} title='Go Back'/> } 
                centerComponent={{ text: 'Info Seller', style: { color: '#fff' } }} 
                containerStyle={{backgroundColor:'#0BB586'}}/>        
        <Text>Info of the seller will be put on this page</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Name Seller</Text>
        <Text>email seller</Text>

        {this.state.items.length > 0
          ? <Button title={this.state.items[0].title} onPress={() => this.props.navigation.navigate('BookScreen', {title: this.state.items[0].title })}/> 
        : <Text> No books </Text>}
        <Location />
      </View>
    );
  }
}
