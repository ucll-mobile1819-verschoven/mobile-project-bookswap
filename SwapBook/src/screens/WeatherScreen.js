import React from 'react';
import { Text, View, Animated, StyleSheet, KeyboardAvoidingView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../styles/Style';
import axios from 'axios';
import weatherIcon from "../components/WeatherIcon.js";

export default class MyBookScreen extends React.Component {
    
    constructor(props) {
        super(props);
        const { params } = this.props.navigation.state;
            const homecity = params ? params.homecity : null;
        this.state = {
            val: new Animated.Value(0),

            currentColor: 'rgba(255,255,255,0.5)',
            nextColor: this._randomColor(),
            icon: weatherIcon(),

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
        
        // Store nextColor, since we'd like to start next time with it.
        var current = this.state.nextColor;

        // Reset animation
        this.state.val.setValue(0);

        axios.get("https://api.openweathermap.org/data/2.5/weather?q="+ this.state.homecity +"&appid=7a041a9cabf3c0a1169a2a9fb5d1e889&units=metric")
        .then((response) => {
          this.setState({
            weatherData : response.data,
            currentColor: current,
            nextColor: this._randomColor(),
            })
        })
    }
    
    componentDidMount(){
        this.getWeatherData();  
    }

  render(){ 
    var backgroundColor = this.state.val.interpolate({
        inputRange: [0, 1],
        outputRange: [
          this.state.currentColor,
          this.state.nextColor
        ],
      });

      // Start the animation
    Animated.spring(this.state.val, {
        tension: 1,
        friction: 20,
        toValue: 1
      }).start();

    return (
        <Animated.View style={{
            backgroundColor: backgroundColor,
            flex: 1,
            alignItems: "stretch",
            justifyContent: "center"}}>
                
            <KeyboardAvoidingView  behavior="padding" keyboardVerticalOffset={80} >
              <View style={{marginBottom: this.state.keyboardSpace}}>
              <View style={[animationstyles.animatedContainer]}>
                <Text style={animationstyles.icon}>
                  {weatherIcon(this.state.weatherData.weather[0].icon)}
                </Text>
                <Text style={animationstyles.temperature}>
                  {Math.round(this.state.weatherData.main.temp) + "°C"}
                </Text>
                <Text style={animationstyles.location}>
                  {this.state.weatherData.name}, {this.state.weatherData.sys.country}
                </Text>
                <Text style={animationstyles.weatherType}>
                  {this.state.weatherData.weather[0].description}
                </Text>
                <TextInput style={animationstyles.input}  
                  value={this.state.homecity}
                  onChangeText={place => this.setState({ homecity: place })}
                  clearButtonMode={"always"}
                  enablesReturnKeyAutomatically={true}
                  clearTextOnFocus={true}
                  returnKeyType={"search"}
                  onSubmitEditing={this.getWeatherData}/>
              </View>
              </View>
            </KeyboardAvoidingView>
          </Animated.View>
    );
  }

  _randomColor() {
    var colors = [0, 1, 2].map(() => Math.ceil(Math.random() * 255));

    return "rgba(" + colors.join(",") + ",0.6)"
  }
}

var animationstyles = StyleSheet.create({
    animatedContainer: {
      alignItems: "center",
      justifyContent: "center"
    },
    temperature: {
      fontSize: 62,
      fontWeight: "100",
      margin: 0
    },
    location: {
      fontSize: 14,
      fontWeight: "100",
      marginBottom: 20,
    },
    weatherType: {
      fontSize: 34,
      fontWeight: "500"
    },
    input: {
      borderWidth: 1,
      borderColor: "#666",
      height: 40,
      marginVertical: 20,
      marginHorizontal: 20,
      paddingHorizontal: 10,
      borderRadius: 5
    },
    icon: {
      //fontFamily: 'WeatherIcons-Regular',
      fontSize: 130,
      padding: 0
    }
  });
  