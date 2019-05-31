import React from 'react';
import { Text, View, Button, KeyboardAvoidingView, ScrollView, AsyncStorage } from 'react-native';
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

export default class ChangeBookScreen extends React.Component{  
  constructor(props) {
    super(props);
    this.state = {
        session: '',
        item: [],
        items: [],
        itemId: '',
    };
  }


  handleSubmitUpdate = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    
    if (value!=null){
      //geen errors
      this.writeUserData(value.title, value.author, value.condition, value.isbn, value.price)
      this.props.navigation.navigate('Home', {sellerId: sellerId});
    }
  }
  handleSubmitDelete = () => {
    console.log(this.state.itemId);
    let removeRef = db.ref('book/' + this.state.itemId);
    removeRef.remove()
    this.props.navigation.navigate('MyBookScreen', {session:  this.state.session});
  }

  writeUserData(title, author, condition, isbn, price){
    const sellerId = this.state.session;
    itemsRef.update({
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
        
  componentDidMount() {
    itemsRef.on('value', (snapshot) => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items });
      
    });

    const { params } = this.props.navigation.state;
    const session = params ? params.session : null;
    this.setState({session : session});
    const item = params ? params.item : null;
    this.setState({item : item});
    const itemId = params ? params.itemId : null;
    this.setState({itemId : itemId});
    

    
}

  render(){
    return(
      <KeyboardAvoidingView style={styles.centered} style={styles.container} behavior="padding" enabled>
         <Header leftComponent={ <Logo/> } centerComponent={{ title: 'Edit your book', style: { color: '#fff' }}} containerStyle={{backgroundColor:'#0BB586',}}/>
        <ScrollView>
          <View>
                <View style={styles.formStyle}>
                  <Form ref={c => this._form = c} type={Book} options={options}/>
                  <Button title="Update book" onPress={this.handleSubmitUpdate} color="#0BB586"/>
                  <Button title="Delete book" onPress={this.handleSubmitDelete} color="#0BB586"/>
	      	      </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
};

