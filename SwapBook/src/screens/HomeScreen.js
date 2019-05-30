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


//GET BOOKS
componentDidMount() {
  itemsRef.on('value', (snapshot) => {
    let data = snapshot.val();
    let items = Object.values(data);
    this.setState({items});
  })
}
  render(){
    
    const sellerId =this.props.navigation.getParam('sellerId');
    //BOOK LOOP
    var books = [];
    for (let i=0; i< this.state.items.length; i++){
        books.push(
            <View style={styles.books} key={"book" + i}>
              <Button color="#0BB586" title={this.state.items[i].title} onPress={() => this.props.navigation.navigate('BookScreen', {title: this.state.items[i].title, sellerId: this.state.items[i].sellerId })}/>
            </View>
        )
    }
    return(
      <View style={styles.centered}>
        
        <Header leftComponent={ <Logo/> } centerComponent={{ text: 'SwapBook', style: { color: '#fff',}}} containerStyle={{backgroundColor:'#0BB586'}}/>
        <Text>You are logged in as {sellerId} </Text>
          <View style={{marginBottom: 5, paddingBottom: 5}}>{ books}</View>
            

            <Button title="AddBook" onPress={() => this.props.navigation.navigate('AddBook', {sellerId: sellerId})} color="#BFFF00" style={styles.books}/>
      </View>
    )
  }
};
