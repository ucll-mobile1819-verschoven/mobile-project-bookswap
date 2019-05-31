import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';


import FetchLocation from './FetchLocation'
import UsersMap from './UsersMap';


//Dit moet gebruikt worden in de paginas waar een map nodig is
//Dit is dus niet de hoofdpagina natuurlijk
export default class SellerLocation extends React.Component{
  state = {
    userLocation: null,
    sellerLocation: []
  }

  
  getSellerLocationHandler = () => {
      //GET location seller of book
      fetch('https://swapbook-2403f.firebaseio.com/seller.json')
      .then(response => response.json())
      .then(parsedResponse => {
        const locationArray = [];
        for (const key in parsedResponse){
          locationArray.push({
            latitude: parsedResponse[key].latitude,
            longitude: parsedResponse[key].longitude,
            id: key
          })
        }
        if (this.state.sellerLocation.length == 0){
        this.setState({
          sellerLocation: locationArray
        });
      }
      })
      .catch(err => console.log(err));
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Button title="Get Seller Location" onPress={this.getSellerLocationHandler} style={styles.flex1} color='#0BB586'/>
          <FetchLocation onGetLocation={this.getUserLocationHandler} style={styles.flex2}/>
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