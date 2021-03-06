import React from 'react';
import { Text, View, KeyboardAvoidingView, ScrollView } from 'react-native';
import {Header, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../styles/Style';
import Logo from '../components/Logo';
import t from 'tcomb-form-native';


import { db } from '../config/db';

let itemsRef = db.ref('/seller');
let emails = [];

const Form = t.form.Form;


var Email = t.refinement(t.String, email =>{
  let exists = false;
  for (let i=0; i< emails.length; i++) {
    
    if (emails[i] == email) {
      exists = true;
      
    }
  }
  if (!exists){
    const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; //or any other regexp
    return reg.test(email);
  }
  
});


Email.getValidationErrorMessage = function (value, path, context) {
  if (value == null){
    return 'Without an email address how are you going to reset your password when you forget it?';
  }
  else {
    for (let i=0; i< emails.length; i++) {
      if (emails[i] == value) {
       return 'This user is already registered';
      }
    }
    return 'Common knowledge: a@b.com';
  }
  

};


var Password = t.refinement(t.String, password =>{
  const reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; //or any other regexp
  return reg.test(password);
});
Password.getValidationErrorMessage = function (value, path, context) {
  if (value == null){
    return 'Choose something you use on a dozen other sites or something you won\'t remember.'
  }

  return 'Your password must be at least 8 characters including 1 number';
};

const User = t.struct({
    firstname: t.String,
    lastname: t.String,
    residence: t.String,
    email: Email,
    password: Password,
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
      error: Email.getValidationErrorMessage,
      
    },
    password: {
      password: true,
      secureTextEntry: true,
      error: Password.getValidationErrorMessage,
    },
  }
}

export default class Registerscreen extends React.Component{  

  componentDidMount() {
    itemsRef.on('value', (snapshot) => {
      let data = snapshot.val();
      let users = Object.values(data);
      for (let i=0; i< users.length; i++) {
        emails.push(users[i].email);
      }
      
    });
  }

  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    //value of forminputs
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
handler(arg) {
  this.setState({
    loc: arg
  });
  return;
}

  render(){
    return(
      <KeyboardAvoidingView style={styles.center} style={styles.container} behavior="padding" enabled>
         <Header leftComponent={ <Logo/> } centerComponent={{ text: 'Register', style: { color: '#fff' }}} containerStyle={{backgroundColor:'#0BB586',}}/>
        <ScrollView>
                
          <View>
           
            <Button 
            buttonStyle={{ marginTop: 15, marginLeft: 15, marginRight:15}}  
            icon={
              <Icon
                name="arrow-left"
                size={25}
                color="#0BB586"
              />
            }
            type="clear" 
            onPress={() => this.props.navigation.navigate('Welcome')} />

                <View style={styles.formStyle}>
                  <Form ref={c => this._form = c} type={User} options={options}/>
                  <Button 
                  buttonStyle={{ marginTop:10, backgroundColor:"#0BB586"}} 
                  type="solid" 
                  title="Sign Up" 
                  onPress={this.handleSubmit}/>
	      	      </View>
               
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
};

