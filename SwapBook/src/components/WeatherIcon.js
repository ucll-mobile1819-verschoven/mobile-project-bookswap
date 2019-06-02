import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function(iconCode) {
  console.log(iconCode)
    let map = {
      '01d': <Icon name='weather-sunny'/>, // clear sky
      '02d': <Icon name='weather-cloudy'/>, // few clouds
      '03d': <Icon name='weather-cloudy'/>, // scattered clouds
      '04d': <Icon name='weather-cloudy'/>, // broken clouds
      '09d': <Icon name='weather-pouring'/>, // shower rain
      '10d': <Icon name='weather-rainy'/>, // rain
      '11d': <Icon name='weather-lightning-rainy'/>, // thunderstorm
      '13d': <Icon name='weather-snowy'/>, // snow
      '50d': <Icon name='weather-windy'/>, // mist
      '01n': <Icon name='weather-sunny'/>,
      '02n': <Icon name='weather-cloudy'/>,
      '03n': <Icon name='weather-cloudy'/>,
      '04n': <Icon name='weather-cloudy'/>,
      '09n': <Icon name='weather-pouring'/>,
      '10n': <Icon name='weather-rainy'/>,
      '11n': <Icon name='weather-lightning-rainy'/>,
      '13n': <Icon name='weather-snowy'/>,
      '50n': <Icon name='weather-windy'/>
    };
  
    return map[iconCode] || '\uf03e';
  }
  