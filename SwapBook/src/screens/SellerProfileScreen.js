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
  /*getUser(sellerId){
    console.log("sellerIs: " + sellerId);
    var query = itemsRef.orderByChild('seller/sellerId').equalTo(sellerId);
    query.once("value", function(snapshot) {
    snapshot.forEach(function(child) {
    console.log("OUTPUT\n" + "!!!!!: " + child.key, child.val().bio);
  });
});

  }*/
  constructor(props) {
    super(props);

    this.state = {
        items: [],
    };
  };
  componentDidMount() {
    const { params } = this.props.navigation.state;
    const sellerId = params ? params.sellerId : null;
    itemsRef.on('value', (snapshot) => {
      //Object with keys
      let data = snapshot.val();
      //Value of objects
      let items = Object.values(data);
      //object Keys
      let ids = Object.keys(data);

     //let key = ids.find(sellerId);
    //console.log(key);
      console.log(items);
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
    const sellerId = params ? params.sellerId : null;
    //this.getUser(sellerId);
    return (
      <View>
        <Header leftComponent={ <Icon name="ios-arrow-back" color={'#fff'} size={30} onPress={()=> this.props.navigation.goBack()} title='Go Back'/> } 
                centerComponent={{ text: 'Info Seller', style: { color: '#fff' } }} 
                containerStyle={{backgroundColor:'#0BB586'}}/>        
        <Text>Info of the seller will be put on this page</Text>
        <Text>sellerId: {JSON.stringify(sellerId)}</Text>
        <Text>First Name: {this.state.items[0].firstname}</Text>
        <Text>Last Name: {this.state.items[0].lastname}</Text>
        <Text>Email: {this.state.items[0].email}</Text>
        <Text>Residence: {this.state.items[0].residence}</Text>

        <Location />
      </View>
    );
  }
}
