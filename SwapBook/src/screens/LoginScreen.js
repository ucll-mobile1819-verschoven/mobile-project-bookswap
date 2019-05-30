import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import { db } from '../config/db';

let usersRef = db.ref('/seller');

export default class LoginScreen extends React.Component {

  state = { users: [], email: '', password: '', errorMessage: null }

  handleLogin = () => {
    for  (let i=0; i< this.state.users.length; i++) {
      //TODO: pass sellerId property to homescreen 
      console.debug(this.state.users[i])
        if (this.state.email == this.state.users[i].email && this.state.password == this.state.users[i].password) {
          this.props.navigation.navigate('Home', {sellerId: this.state.users[i].email});
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

  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Login" onPress={this.handleLogin} />
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => this.props.navigation.navigate('Register')}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})