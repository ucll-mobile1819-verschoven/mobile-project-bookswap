import React from 'react';
import { Text, View, Button } from 'react-native';
import {Header, Card, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../styles/Style';
import axios from 'axios';

export default class MyBookScreen extends React.Component {
    
    constructor(props) {
        super(props);
        const { params } = this.props.navigation.state;
            const homecity = params ? params.homecity : null;
        this.state = {
            homecity : homecity,
            weatherData: {
              coord: [],
              weather: [{
                id: '',
                main: '',
                description:'',
                icon: '',
              }],
              base: '',
              main:[],
              wind: [],
              clouds: [],
              rain: [],
              snow: [],
              dt: '',
              sys: [],
              id: '',
              name: '',
              cod: '',
            }
        };        
    }

    getWeatherData = () =>{
        console.log('GET WEATHER DATA: ' + this.state.homecity);
        axios.get("https://api.openweathermap.org/data/2.5/weather?q="+ this.state.homecity +"&appid=7a041a9cabf3c0a1169a2a9fb5d1e889&units=metric")
        .then((response) => {
          this.setState({
            weatherData : response.data})
        })
      }
    componentDidMount(){
        
    /*    if (this.state.homecity == null || this.state.homecity == ''){
            console.log('HOMECITY IS NULL');
            const { params } = this.props.navigation.state;
            const homecity = params ? params.homecity : null;
            console.log('residence: ' + homecity);
            this.setState({homecity});
            console.log('homecity: ' + this.state.homecity);*/
            this.getWeatherData();   
      //  }
        
    }

  render(){ 
    return (
      <View style={{flex: 1}} >
         <Header leftComponent={ <Icon name="ios-arrow-back" color={'#fff'} size={30} onPress={()=> this.props.navigation.goBack()} title='Go Back'/> } 
                centerComponent={{ text: 'Info Book', style: { color: '#fff' } }} 
                containerStyle={{backgroundColor:'#0BB586'}}/>            

            <Input  
            label={'City'}         
            value={this.state.homecity}
            onChangeText={place => this.setState({ homecity: place })}
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
          <Text>{this.state.weatherData.name}, {this.state.weatherData.sys.country}</Text>
          <Text>{this.state.weatherData.main.temp} °C </Text>
          <Text>{this.state.weatherData.weather[0].main} - {this.state.weatherData.weather[0].description} </Text>

        </View>
    );
  }
}
