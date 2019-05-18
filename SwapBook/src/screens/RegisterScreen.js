import React from 'react';
import { Text, View, Button, KeyboardAvoidingView, ScrollView } from 'react-native';
import {Header} from 'react-native-elements';
import { styles } from '../styles/Style';
import Logo from '../components/Logo';
import t from 'tcomb-form-native';

import { db } from '../config/db';

let itemsRef = db.ref('seller/');

const Form = t.form.Form;

const User = t.struct({
    firstname: t.String,
    lastname: t.String,
    residence: t.String,
    email: t.String,
    password: t.String,
});

const options = {
  fields: {
    firstname: {
      error: 'You do have a name don\'t you?'
    },
    lastname: {
      error: 'Do you not have a last name?'
    },
    residence: {
      error: 'We wont use this information, trust me.'
    },
    email: {
      error: 'Without an email address how are you going to reset your password when you forget it?'
    },
    password: {
      error: 'Choose something you use on a dozen other sites or something you won\'t remember.'
    },
  }
}

export default class Registerscreen extends React.Component{  
  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
    if (value!=null){
      this.writeUserData(value.email, value.firstname, value.lastname, value.password, value.residence)
      this.props.navigation.navigate('Welcome', {success: 'Great job! You can now login!'});
    }
  }

  writeUserData(email, firstname, lastname, password, residence){
    itemsRef.push({
      email,
      firstname,
      lastname,
      password,
      residence
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
      <KeyboardAvoidingView style={styles.center} style={styles.container} behavior="padding" enabled>
        <ScrollView>
          <View>
            <Header leftComponent={ <Logo/> } centerComponent={{ titl: 'Register', style: { color: '#fff' }}} containerStyle={{backgroundColor:'#0BB586',}}/>
            <Button title="Back" onPress={() => this.props.navigation.navigate('Welcome')} color="#0BB586"/>
                <View style={styles.formStyle}>
                  <Form ref={c => this._form = c} type={User} options={options}/>
                  <Button title="Sign Up" onPress={this.handleSubmit} color="#0BB586"/>
	      	      </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
};

