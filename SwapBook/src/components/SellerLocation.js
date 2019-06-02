import React, { Component } from 'react';
import { Platform, StyleSheet, View, Button, AsyncStorage } from 'react-native';
import {Text} from 'react-native-elements';

import FetchLocation from './FetchLocation'
import UsersMap from './UsersMap';

import axios from 'axios';

import { db } from '../config/db';

let usersRef = db.ref('/seller');

//Dit moet gebruikt worden in de paginas waar een map nodig is
//Dit is dus niet de hoofdpagina natuurlijk
export default class SellerLocation extends React.Component{
  state = {
    userLocation: null,
    sellerResidence: '',
    sellerLocation: []
  }


  componentDidMount() {
    //this.getSellerResidence();
  }

  getSellerResidence = async () => {
    try {
      const value = await AsyncStorage.getItem('@sellerResidence');
      
      if (value != null) {
      this.setState({sellerResidence : value})
      this.getSellerLocationHandler();
      }
    } catch(e) {
      alert(e.message);
    }
  }

  

  getSellerLocationHandler = () => {
    axios.get("https://eu1.locationiq.com/v1/search.php?key=fd47a0f0897429&q=" + this.state.sellerResidence + "&format=json")
          // .then - bij een 200 (OK)
          // krijgt een response mee: JSON
          .then((response) => {
              // Wanneer OK dan voert hij alles hierbinnen uit
              
              const locationArray = [];
              locationArray.push({
                latitude:response.data[0].lat,
                longitude:response.data[0].lon,
                id:0
              }
              )

              if(this.state.sellerLocation.length == 0) {
                this.setState({
                  sellerLocation:locationArray
                })
              }
          })
          .catch(err => console.log(err))
      //GET location seller of book
      // fetch('https://swapbook-2403f.firebaseio.com/seller.json')
      // .then(response => response.json())
      // .then(parsedResponse => {
      //   const locationArray = [];
      //   for (const key in parsedResponse){
      //     locationArray.push({
      //       latitude: parsedResponse[key].latitude,
      //       longitude: parsedResponse[key].longitude,
      //       id: key
      //     })
      //   }
      //   if (this.state.sellerLocation.length == 0){
      //   this.setState({
      //     sellerLocation: locationArray
      //   });
      // }
      // })
      // .catch(err => console.log(err));
    }

   

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Button title="Get Seller Location" onPress={this.getSellerResidence} style={styles.flex1} color='#0BB586'/>
        </View>
        <UsersMap userLocation={this.state.userLocation} sellerLocation={this.state.sellerLocation} style={styles.flex3}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: '20%',
    backgroundColor: "#ffe",
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
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