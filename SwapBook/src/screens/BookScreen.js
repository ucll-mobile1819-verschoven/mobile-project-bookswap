import React from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../styles/Style';
import { db } from '../config/db';


let itemsRef = db.ref('/book');

export default class BookScreen extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
        items: [],
        sellerId: '',
        titleBook: '',
    };
  };
  componentDidMount(){
 
    

    const { params } = this.props.navigation.state;
    const title = params ? params.title : null;
    const sellerId = params ? params.sellerId : null;

    this.setState({titleBook : title});
    this.setState({sellerId : sellerId});

    itemsRef.on('value', (snapshot) => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items });
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
    
    //here get all data of the book by the id of the book???
  };
  render(){
    var item = [];
      for  (let i=0; i< this.state.items.length; i++) {
        if (this.state.sellerId == this.state.items[i].sellerId && this.state.titleBook == this.state.items[i].title) {
          let author = this.state.items[i].author;
          let condition = this.state.items[i].condition;
          let isbn = this.state.items[i].isbn;
          let price = this.state.items[i].price;
          let sellerId = this.state.items[i].sellerId;
          let title = this.state.items[i].title;
          item.push(
            <View style={styles.books} key={"bookinfo" + i}>
              <Text>author: {author}</Text>
              <Text>condition: {condition}</Text>
              <Text>isbn: {isbn}</Text>
              <Text>price: {price}</Text>
              <Text>sellerId: {sellerId}</Text>
              <Text>title: {title}</Text>
            </View>
          )
          break;
        } 
      }
    return (
      <View>
        <Header leftComponent={ <Icon name="ios-arrow-back" color={'#fff'} size={30} onPress={()=> this.props.navigation.goBack()} title='Go Back'/> } 
                centerComponent={{ text: 'Info Book', style: { color: '#fff' } }} 
                containerStyle={{backgroundColor:'#0BB586'}}/>        
      
        
        <View>{item}</View>

        <Button title='seller' onPress={() => this.props.navigation.navigate('SellerProfile', {sellerId:  this.state.sellerId}) } color="#0BB586"/>
      </View>
    );
  }
}

//in seller button give the seller of this book with it
