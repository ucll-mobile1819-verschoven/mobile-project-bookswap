import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function(iconCode) {
    let map = {
      '01d': <Icon color='white' size={100} name='weather-sunny'/>, // clear sky
      '02d': <Icon color='white' size={100} name='weather-cloudy'/>, // few clouds
      '03d': <Icon color='white' size={100} name='weather-cloudy'/>, // scattered clouds
      '04d': <Icon color='white' size={100} name='weather-cloudy'/>, // broken clouds
      '09d': <Icon color='white' size={100} name='weather-pouring'/>, // shower rain
      '10d': <Icon color='white' size={100} name='weather-rainy'/>, // rain
      '11d': <Icon color='white' size={100} name='weather-lightning-rainy'/>, // thunderstorm
      '13d': <Icon color='white' size={100} name='weather-snowy'/>, // snow
      '50d': <Icon color='white' size={100} name='weather-windy'/>, // mist
      '01n': <Icon color='black' size={100} name='weather-sunny'/>,
      '02n': <Icon color='black' size={100} name='weather-cloudy'/>,
      '03n': <Icon color='black' size={100} name='weather-cloudy'/>,
      '04n': <Icon color='black' size={100} name='weather-cloudy'/>,
      '09n': <Icon color='black' size={100} name='weather-pouring'/>,
      '10n': <Icon color='black' size={100} name='weather-rainy'/>,
      '11n': <Icon color='black' size={100} name='weather-lightning-rainy'/>,
      '13n': <Icon color='black' size={100} name='weather-snowy'/>,
      '50n': <Icon color='black' size={100} name='weather-windy'/>
    };
  
    return map[iconCode] || '\uf03e';
  }
  