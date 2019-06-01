import React from 'react';
import { Text, View, AsyncStorage, ScrollView  } from 'react-native';
import {Header, Button} from 'react-native-elements';
import Logo from '../components/Logo';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../styles/Style';
import { db } from '../config/db';

let itemsRef = db.ref('/book');


export default class HomeScreen extends React.Component{  

  constructor(props) {
    super(props);
    this.state = {
        items: [],
        session: '',
    };
}

logout = async () => {
  try {
    await AsyncStorage.removeItem('@email');
    this.props.navigation.navigate('Welcome');
  } catch(e) {
    alert(e.message);
  }
}
getEmail = async () => {
  try {
    const value = await AsyncStorage.getItem('@email');
    this.setState({session : value})
  } catch(e) {
    alert(e.message);
  }
}


    
//GET BOOKS
componentDidMount() {
  itemsRef.on('value', (snapshot) => {
    let data = snapshot.val();
    let items = Object.values(data);
    this.setState({items});
    this.getEmail();
    
  })
}
  render(){
    
    //BOOK LOOP
    var books = [];
    for (let i=0; i< this.state.items.length; i++){
        books.push(
            <View style={styles.books} key={"book" + i}>
              <Button 
              titleStyle={{color:"#0BB586"}}
              type="clear" 
              title={this.state.items[i].title} 
              onPress={() => this.props.navigation.navigate('BookScreen', {title: this.state.items[i].title, sellerId: this.state.items[i].sellerId })}/>
            </View>
        )
    }
    return(
      <View style={styles.centered}>

        <Header leftComponent={ <Logo/> } 
                centerComponent={{ text: 'SwapBook', style: { color: '#fff',}}} containerStyle={{backgroundColor:'#0BB586'}}
                rightComponent={<Button titleStyle={{color:"white"}} type="clear" title="Logout" onPress={this.logout} color="white"/>}/>
 
          <View style={{flexGrow:1}}>
            <ScrollView style={{maxHeight:'80%'}}>{ books}</ScrollView>
            <View style={styles.centered}>
              <Button 
              buttonStyle={
                {            
                  width:'100%',
                  marginTop:15,
                  backgroundColor:"#0BB586"
                }
              }
              type="solid" 
              title="AddBook" 
              onPress={() => this.props.navigation.navigate('AddBook')} 
              />
            </View>
         </View>
        </View>
    )
  }
};
