import React from 'react';
import { Text, FlatList, View, Button, SafeAreaView } from 'react-native';
import {Header} from 'react-native-elements';
import Logo from '../components/Logo';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../styles/Style';
import axios from 'axios';

import { db } from '../config/db';

let itemsRef = db.ref('/book');


//import {Ionicons} from '@expo/vector-icons'

//Home  --  show books
export default class HomeScreen extends React.Component{  
  
 // static navigationOptions = ({navigation}) => {
 //   const params = navigation.state.params || {};
   // return {

      //in comments voorbeeld voor params mee te geven
    /*  headerRight: (
        <Button onPress={params.increaseCount} title="+1" color="#eee" />
      ),*/
  //  }
 // };

  /*componentWillMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }
  state = {
    count: 0,
  };
  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };*/

  constructor(props) {
    super(props);

    // Met state kan er data bijgehouden worden binnen het component
    this.state = {
        items: [],
    };

    // functie initialiseren - alleen bij functies waarvoor this. wordt gebruikt
  //  this.loadData = this.loadData.bind(this);
    //this.getAllBooks = this.getAllBooks.bind(this);

}
/*
loadData() {
    // GET request naar de URL returned een lijst van students in een classgroup
    
    // BELANGRIJK: ZORG DAT DE BACKEND DRAAIT op poort 8080 - mogelijk moet je het ip adres aanpassen naar die van jou pc
    axios.get("http://192.168.137.1:8080/books")
        // .then - bij een 200 (OK)
        // krijgt een response mee: JSON
        .then((response) => {
            // Wanneer OK dan voert hij alles hierbinnen uit
            this.setState({
                // response.data is de JSON uit de back-end
                data: response.data
            });
        });
}
*/
// Standaard functie
// wordt uitgevoerd bij het inladen van het component
componentDidMount() {
  itemsRef.on('value', (snapshot) => {
    let data = snapshot.val();
    let items = Object.values(data);
    this.setState({items});
  })
}

/*
getAllBooks = () => {
  fetch('https://swapbook-2403f.firebaseio.com/book.json')
  .then(response => response.json)
  .then(parsedResponse => {
    
    this.setState({
      data: parsedResponse
    });
  })
  .catch(err => console.log(err));
}*/
  render(){
    return(
      <View style={styles.centered}>
        <Header leftComponent={ <Logo/> } centerComponent={{ text: 'SwapBook', style: { color: '#fff',}}} containerStyle={{backgroundColor:'#0BB586'}}/>
          {this.state.items.length > 0
          ? <Button title={this.state.items[0].title} onPress={() => this.props.navigation.navigate('BookScreen', {title: this.state.items[0].title, sellerId: this.state.items[0].sellerId })}/> 
        : <Text> No books </Text>}
        
          <Button title="Boek X" onPress={() => this.props.navigation.navigate('BookScreen' , {itemId: 86, otherParam: 'more info user', title: 'X', sellerId: 'Y'})} color="#0BB586" />
          <Button title="AddBook" onPress={() => this.props.navigation.navigate('AddBook')} color="#0BB586"/>
      </View>
    )
  }
};

//layout for loop of books
/*<View>

          {this.state.data.map((row, key) => {
                                return (
                                  <View style={styles.books} key={"view" + key}>
                                    <Button title={row.title} key={key} onPress={() => this.props.navigation.navigate('BookScreen' , {itemId: 86, otherParam: 'more info user'})} color="#0BB586" />
                                  </View>
                                    
                                )
                            })}
          <View style={{margin: 10, padding: 10}}><Button title="AddBook" onPress={() => this.props.navigation.navigate('AddBook')} color="#FFA71A"/></View>
          
        </View>
*/