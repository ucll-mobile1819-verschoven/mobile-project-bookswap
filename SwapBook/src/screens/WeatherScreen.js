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
        const residence = params ? params.residence : null;
        
        this.state = {
            homecity: residence,
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
        axios.get("https://api.openweathermap.org/data/2.5/weather?q="+ this.state.homecity +"&appid=4461c8af39efae2ba9b252bc7bad0390&units=metric")
        .then((response) => {
            this.setState({
            weatherData : response.data})
        })
      }
      componentDidMount(){
          this.getWeatherData();
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

