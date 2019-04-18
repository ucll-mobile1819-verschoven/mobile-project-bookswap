import React from 'react';
import { View, Image } from 'react-native';

export default class Logo extends React.Component {
    render() {
      return (
        <Image
          source={require('../images/book2.png')}
          style={{ width: 30, height: 30, marginLeft: 5, borderRadius: 30,}}
        />
      );
    }
  }
 