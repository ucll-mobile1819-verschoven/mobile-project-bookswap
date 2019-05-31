import React from 'react';
import { Text, View, Button,ScrollView } from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../styles/Style';
import { db } from '../config/db';


let itemsRef = db.ref('/book');

export default class MyBookScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            session: '',
            items: [],
            ids: []
        };
    }
    componentDidMount() {
          itemsRef.on('value', (snapshot) => {
          let data = snapshot.val();
          let items = Object.values(data);
          this.setState({ items });
          let ids = Object.keys(data);
          this.setState({ids});
        });
        const { params } = this.props.navigation.state;
        const session = params ? params.session : null;
        this.setState({session : session});
        
        
 
    }

  render(){
    var item = [];
      for  (let i=0; i< this.state.items.length; i++) {
        if (this.state.session == this.state.items[i].sellerId) {
          item.push(
            <View style={styles.books} key={"book" + i}>
              <Button color="#0BB586" title={this.state.items[i].title} onPress={() => this.props.navigation.navigate('ChangeBookScreen', {itemId: this.state.ids[i], item: this.state.items[i], session: this.state.session })}/>
            </View>
          )
        } 
      }
 
    return (
      <View style={styles.centered}>
        <Header leftComponent={ <Icon name="ios-arrow-back" color={'#fff'} size={30} onPress={()=> this.props.navigation.goBack()} title='Go Back'/> } 
                centerComponent={{ text: 'Info Book', style: { color: '#fff' } }} 
                containerStyle={{backgroundColor:'#0BB586'}}/>        
        <Text>Click on any book to delete or edit them.</Text>

        <ScrollView style={{marginBottom: 80, paddingBottom: 80}}>{item}</ScrollView>

        </View>
    );
  }
}

//in seller button give the seller of this book with it
