import React from 'react';
import { Text, View, AsyncStorage, Image } from 'react-native';
import {Header, Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../components/Logo';
import { styles } from '../styles/Style';
import { db } from '../config/db';

let usersRef = db.ref('/seller');

export default class WelcomeScreen extends React.Component{  
  state = { users: [], email: '', password: '', errorMessage: null }

  handleLogin = () => {
    for  (let i=0; i< this.state.users.length; i++) {
      //TODO: pass sellerId property to homescreen 
     // console.debug(this.state.users[i])
        if (this.state.email == this.state.users[i].email && this.state.password == this.state.users[i].password) {


          AsyncStorage.setItem('@email', this.state.users[i].email);
          this.props.navigation.navigate('Tabnav');
          break;
        } else {
        this.state.errorMessage= "Incorrect email or password";
        }
    }
  }

  componentDidMount() {
    usersRef.on('value', (snapshot) => {
      let data = snapshot.val();
      let users = Object.values(data);
      this.setState({ users });
    });
  }
  render(){
    let display = "none"
    const { params } = this.props.navigation.state;
    const success = params ? params.success : null;
    if (success!=null){
        display = "flex"
    }



    return(
      <View>
        <Header leftComponent={ <Logo/> } centerComponent={{ text: 'Welcome to Swapbook', style: { color: '#fff' } }} containerStyle={{backgroundColor:'#0BB586'}}/>
       <View  style={styles.welcome}>

       {/*<Text style={{display}}>{JSON.stringify(success)}</Text>*/}
       <View style={{display}}><Button title="Great job! You can now login!" onPress={this.handleLogin} color='#0BB586' backgroundColor='transparant'/></View>

      {this.state.errorMessage &&
          <Text style={{ color: 'red'}}>
            {this.state.errorMessage}
          </Text>}

          <Input           
          leftIcon = {<Icon name='user' size={18} color="#0BB586" />}
          leftIconContainerStyle={{marginRight:15, marginLeft:15}}
          placeholder="Email" 
          autoCapitalize="none"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
          />
          <Input 
          leftIcon = {<Icon name='lock' size={18} color="#0BB586" />}
          leftIconContainerStyle={{marginRight:15, marginLeft:15}}
          secureTextEntry
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          />
          {/*
        <TextInput
          style={styles.border}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.border}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
          */}
        <Button
          buttonStyle={
            {
              marginTop:15,
              backgroundColor:"#0BB586"
            }
          }
          type="solid"
          title="Login"
          onPress={this.handleLogin}
        />
         <View style={{marginTop: 5, borderRadius: 5}}>
        <Button 
          type="clear"
          title="Don't have an account yet? Sign up!"
          titleStyle={{color:"#0BB586"}} 
          onPress={() => this.props.navigation.navigate('Register')} 
        />


        </View>
        </View>
      </View>
    )
  }
};