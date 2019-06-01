import React from 'react';
import { Text, View, AsyncStorage, ScrollView } from 'react-native';
import {Header, Button, Card, Input} from 'react-native-elements';
import Logo from '../components/Logo';
import { styles } from '../styles/Style';
import { db } from '../config/db';
import Location from '../components/UserLocation';
import axios from 'axios';
let usersRef = db.ref('/seller');
let itemsRef = db.ref('/book');

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: '',
        session: '',
        users: [],
        city: '',
    };
}
    static navigationOptions = ({ navigation, navigationOptions }) => {
      const { params } = navigation.state;
  
    return {
        //not gonna need nested
        title: params ? params.otherParam: 'Profile',
       // headerStyle: {
       //   backgroundColor: navigationOptions.headerTintColor,
      //  },
      //  headerTintColor: navigationOptions.headerStyle.backgroundColor,
      //<Button title="Update the title" onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'}) } color="#0BB586"/>
      };
    };

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
        this.setState({session : value});
        const place = 'Maaseik';
        this.setState({ city: place });
      } catch(e) {
        alert(e.message);
      }
    }
        
    //GET BOOKS
    componentDidMount() {
        this.getEmail();
 
        usersRef.on('value', (snapshot) => {
          let data = snapshot.val();
          let users = Object.values(data);
          this.setState({ users });
        });        
        
    }

    getWeatherData = () =>{
      console.log("RESIDENCE");
      console.log(this.state.residence);

      axios.get("https://api.openweathermap.org/data/2.5/weather?q="+ this.state.residence +"&appid=4461c8af39efae2ba9b252bc7bad0390")
      .then((response) => {
          this.setState({
          weatherData : JSON.stringify(response.data)})
      })
      //return fetch(url).then((response) => response.json())
     // this.setState({weatherData : 'reset'})

    }

    render() {
      var user = [];
      for  (let i=0; i< this.state.users.length; i++) {
        if (this.state.session == this.state.users[i].email) {
          let email = this.state.users[i].email;
          let firstname = this.state.users[i].firstname;
          let lastname = this.state.users[i].lastname;
          let residence = this.state.users[i].residence;
          
          user.push(
            <View key={i +'userinfo'}>
              <Card title={firstname + " " + lastname} >
              <Text>Email: {email}</Text>
              <Text>Residence: {residence}</Text>
              </Card>
            </View>
          )
        } 

      }
      return (
        <View style={{flex: 1}} >
          <Header leftComponent={ <Logo/> } rightComponent={<Button titleStyle={{color:"white"}} type="clear" title="Logout" onPress={this.logout} color="white"/>} centerComponent={{ text: 'My Profile', style: { color: '#fff' } }} containerStyle={{backgroundColor:'#0BB586'}  }/>
          <ScrollView contentContainerStyle={{
      flexGrow: 1,
      justifyContent: 'space-between',
  }}>
          <View style={{flex: 1}}>
            <View style={styles.centered}>
            
              <View >{user}</View>

              <Button 
              buttonStyle={
                {
                  marginTop:15,
                  backgroundColor:"#0BB586"
                }
              }
              type="solid"
              title='Show My Books' 
              onPress={() => this.props.navigation.navigate('MyBookScreen', {session:  this.state.session}) }/>
              
              <Input  
              label={'City'}         
              onChangeText={place => this.setState({ residence: place })}
              />
              <Button
              buttonStyle={
                {
                  marginTop:15,
                  backgroundColor:"#0BB586"
                }
              }
              type="solid"
              title="search"
              onPress={this.getWeatherData}
            />
            <Text>City: {this.state.residence}</Text>
            <Text>Weather: {this.state.weatherData}</Text>
       
          </View>
          <Location style={{flex: 1}}/>
        
          </View>
          </ScrollView>
         
      </View> 
      );
    }
  }