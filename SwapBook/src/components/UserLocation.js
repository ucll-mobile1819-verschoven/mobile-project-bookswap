import React, { Component } from 'react';
import { Platform, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

import FetchLocation from './FetchLocation'
import UsersMap from './UsersMap';


//Dit moet gebruikt worden in de paginas waar een map nodig is
//Dit is dus niet de hoofdpagina natuurlijk
export default class UserLocation extends React.Component{
  state = {
    userLocation: null,
    sellerLocation: []
  }

  //get user location
  getUserLocationHandler = () => {
      navigator.geolocation.getCurrentPosition(position => {
        if(this.state.userLocation == null) {
        this.setState({
          userLocation: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 1.0,
            longitudeDelta: 1.0,
          }
        });
    }
        //SET location seller of book         => Will need it with making an acount
       /* fetch('https://swapbook-2403f.firebaseio.com/seller.json', {
          method: 'POST',
          body: JSON.stringify({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
*/
      }, err => console.log(err));
  }
  

  render() {
      this.getUserLocationHandler();
    return (
    <View style={styles.container}>
        <View style={styles.header}><Text h4 h4Style={{color:"white", fontSize:18}}>Your current location</Text></View>
        <UsersMap userLocation={this.state.userLocation} sellerLocation={this.state.sellerLocation} style={styles.flex3}/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: '20%',
    backgroundColor: "#0BB586",
  },
  header: {
    alignItems: 'center',
    marginBottom: 5,
    marginTop:5
  },
  flex1: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
  flex2: {
    flex: 2,
    backgroundColor: 'skyblue'
  },
  flex3: {
    flex: 3,
    backgroundColor: 'steelblue'
  },
});