import React from 'react';
import { Text, View, Button } from 'react-native';
import Logo from '../images/book2.png';



//Home  --  show books
export default class HomeScreen extends React.Component{  
    static navigationOptions = ({navigation}) => {
      const params = navigation.state.params || {};
      return {
        headerTitle: <Logo/>,
        headerLeft: (
          <Button onPress={() => navigation.navigate('SellerProfile')} title="Info" color='#eee'/>
        ),
        headerRight: (
          <Button onPress={params.increaseCount} title="+1" color="#eee" />
        ),
      }
    };
  
    componentWillMount() {
      this.props.navigation.setParams({ increaseCount: this._increaseCount });
    }
    state = {
      count: 0,
    };
    _increaseCount = () => {
      this.setState({ count: this.state.count + 1 });
    };
  
    render(){
      return(
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    
        <Text>Home Screen</Text>
        <Text>Count: {this.state.count}</Text>
        <Button title="Go to Profile" onPress={() => this.props.navigation.navigate('Profile' , {itemId: 86, otherParam: 'more info user'})}/>
        <Button title="Ad A Book" onPress={() => this.props.navigation.navigate('AddBook')}/>
        <Button title="Home... again" onPress={() => this.props.navigation.navigate('Home')}/>
        </View>
      )
    }
  };