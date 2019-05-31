import React from 'react';
import { Text, View, KeyboardAvoidingView, ScrollView, AsyncStorage } from 'react-native';
import {Header, Button} from 'react-native-elements';
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
  constructor(props) {
    super(props);
    this.state = {
        session: '',
    };
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
      this.getEmail();
  }


  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    
    if (value!=null){
      //geen errors
      this.writeUserData(value.title, value.author, value.condition, value.isbn, value.price)
      this.props.navigation.navigate('Home', {sellerId: sellerId});
    }
  }

  writeUserData(title, author, condition, isbn, price){
    const sellerId = this.state.session;
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

    
    return(
      <KeyboardAvoidingView style={styles.centered} style={styles.container} behavior="padding" enabled>
         <Header leftComponent={ <Logo/> } centerComponent={{ titl: 'Register', style: { color: '#fff' }}} containerStyle={{backgroundColor:'#0BB586',}}/>
        <ScrollView>
          <View>
                <View style={styles.formStyle}>
                  <Form ref={c => this._form = c} type={Book} options={options}/>
                  <Button 
                  buttonStyle={
                    {
                      marginTop:15,
                      backgroundColor:"#0BB586"
                    }
                  }
                  type="solid"
                  title="Add book" 
                  onPress={this.handleSubmit}/>
	      	      </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
};

