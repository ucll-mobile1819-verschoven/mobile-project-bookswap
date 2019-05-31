import React from 'react';
import { Text, View, Button, KeyboardAvoidingView, ScrollView, AsyncStorage } from 'react-native';
import {Header} from 'react-native-elements';
import { styles } from '../styles/Style';
import Logo from '../components/Logo';
import t from 'tcomb-form-native';

import Icon from 'react-native-vector-icons/Ionicons'
import { db } from '../config/db';


let itemsRef = db.ref('book/');
const Form = t.form.Form;
let sellerId = '';


const Book = t.struct({
    title: t.String,
    author: t.String,
    condition: t.String,    
    isbn: t.String,
    price: t.String
});

const options = {
  fields: {
    title: {
      error: 'What is the title of the book?',
    },
    author: {
      error: 'Who wrote the book?',
    },
    condition: {
      error: 'Is your book as new or used?',
      
    },
    isbn: {
      error: 'Every book has an ISBN',
    },
    price: {
      error: 'You will not sell your book for free, will you?',
    }
  }
}



export default class ChangeBookScreen extends React.Component{  
  constructor(props) {
    super(props);
    this.state = {
        session: '',
        item: [],
        itemId: '',
    };
  }


  handleSubmitUpdate = () => {
    const value = this._form.getValue();
    
    if (value!=null){
      itemsRef.child(this.state.itemId).update({
        'author': value.author,
        'condition' : value.condition,
        'isbn' : value.isbn,
        'price' : value.price,
        'sellerId' : this.state.session,
        'title' : value.title,
        
      })
      
    }
    this.props.navigation.navigate('MyBookscreen', {session:  this.state.session});

  }
  handleSubmitDelete = () => {
    let removeRef = db.ref('book/' + this.state.itemId);
    removeRef.remove();
    this.props.navigation.navigate('MyBookScreen', {session:  this.state.session});
  }
        
  componentDidMount() {
    const { params } = this.props.navigation.state;
    const session = params ? params.session : null;
    this.setState({session : session});
    const item = params ? params.item : null;
    this.setState({item : item});
    const itemId = params ? params.itemId : null;
    this.setState({itemId : itemId});
    

    
}

  render(){
    const values = {
      title: this.state.item.title,
      author: this.state.item.author,
      condition: this.state.item.condition,
      isbn: this.state.item.isbn,
      price: this.state.item.price,
    }
    return(
      <KeyboardAvoidingView style={styles.centered} style={styles.container} behavior="padding" enabled>
         <Header  leftComponent={ <Icon name="ios-arrow-back" color={'#fff'} size={30} onPress={()=> this.props.navigation.goBack()} title='Go Back'/> } 
                  centerComponent={{ text: 'Edit your book', style: { color: '#fff' }}} containerStyle={{backgroundColor:'#0BB586',}}/>
        <ScrollView>
          <View>
                <View style={styles.formStyle}>
                  <Form ref={c => this._form = c} type={Book} options={options} value={values}/>
                  <Button title="Update book" onPress={this.handleSubmitUpdate} color="#0BB586"/>
                  <Button title="Delete book" onPress={this.handleSubmitDelete} color="#0BB586"/>
	      	      </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
};

