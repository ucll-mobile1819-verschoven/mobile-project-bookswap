import React from 'react';
import { Text, View, Button, KeyboardAvoidingView, ScrollView } from 'react-native';
import {Header} from 'react-native-elements';
import { styles } from '../styles/Style';
import Logo from '../components/Logo';
import t from 'tcomb-form-native';

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
      error: 'What is the title of the book?'
    },
    author: {
      error: 'Who wrote the book?'
    },
    condition: {
      error: 'Is your book as new or used?'
    },
    isbn: {
      error: 'Every book has an ISBN'
    },
    price: {
      error: 'You will not sell your book for free, will you?'
    }
  }
}

export default class AddBookScreen extends React.Component{  

  


  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    
    if (value!=null){
      //geen errors
      this.writeUserData(value.title, value.author, value.condition, value.isbn, value.price)
      this.props.navigation.navigate('Home', {sellerId: sellerId});
    }
  }

  writeUserData(title, author, condition, isbn, price){
    itemsRef.push({
      title,
      author,
      condition,
      isbn,
      price,
      sellerId
    }).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })

  }
  render(){
    sellerId = this.props.navigation.getParam('sellerId');
    
    return(
      <KeyboardAvoidingView style={styles.center} style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <Header leftComponent={ <Logo/> } centerComponent={{ titl: 'Register', style: { color: '#fff' }}} containerStyle={{backgroundColor:'#0BB586',}}/>
            
                <View style={styles.formStyle}>
                  <Form ref={c => this._form = c} type={Book} options={options}/>
                  <Button title="Add book" onPress={this.handleSubmit} color="#0BB586"/>
	      	      </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
};

