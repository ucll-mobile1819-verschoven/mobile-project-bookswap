import React from 'react';
import { Text, View, AsyncStorage} from 'react-native';
import Location from '../components/SellerLocation';
import {Header} from 'react-native-elements';
import Logo from '../components/Logo';
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../styles/Style';
import { db } from '../config/db';

let usersRef = db.ref('/seller');


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
        users: [],
        sellerId: ''
    };
  };

  componentDidMount(){
    const { params } = this.props.navigation.state;
    const sellerId = params ? params.sellerId : null;

    this.setState({
      sellerId:sellerId
    })

    

    usersRef.on('value', (snapshot) => {
      let data = snapshot.val();
      let users = Object.values(data);
      this.setState({users});
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
    
    var user = [];
      for  (let i=0; i< this.state.users.length; i++) {
        if (this.state.sellerId == this.state.users[i].email) {
          let email = this.state.users[i].email;
          let firstname = this.state.users[i].firstname;
          let lastname = this.state.users[i].lastname;
          let residence = this.state.users[i].residence;
          AsyncStorage.setItem('@sellerResidence', residence);
          
          user.push(
            <View style={styles.books} key={"book" + i}>
              <Text>Email: {email}</Text>
              <Text>First name: {firstname}</Text>
              <Text>Last name: {lastname}</Text>
              <Text>Residence: {residence}</Text>
            </View>
          )
        } 
      }
    return (
      <View>
        <Header leftComponent={ <Icon name="ios-arrow-back" color={'#fff'} size={30} onPress={()=> this.props.navigation.goBack()} title='Go Back'/> } 
                centerComponent={{ text: 'Info Seller', style: { color: '#fff' } }} 
                containerStyle={{backgroundColor:'#0BB586'}}/>   

         <View>{user}</View>
        <Location/>
      </View>
    );
  }
}

