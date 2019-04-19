import React from 'react';
import { Text, View, Button, SafeAreaView } from 'react-native';
import {Header} from 'react-native-elements';
import Logo from '../components/Logo';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../styles/Style';


//Home  --  show books
export default class HomeScreen extends React.Component{  
 // static navigationOptions = ({navigation}) => {
 //   const params = navigation.state.params || {};
   // return {

      //in comments voorbeeld voor params mee te geven
    /*  headerRight: (
        <Button onPress={params.increaseCount} title="+1" color="#eee" />
      ),*/
  //  }
 // };

  /*componentWillMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }
  state = {
    count: 0,
  };
  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };*/

  render(){
    return(
      <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Header leftComponent={ <Logo/> } centerComponent={{ text: 'SwapBook', style: { color: '#fff' } }} style={styles.headerStyle}/>
      <Text>Home Screen</Text>
      {/*<Text>Count: {this.state.count}</Text> */}
      
      {/*test icons*/}
      <Icon name='ios-home' color={'#000'} size={24}/>
      <Icon name='person' color={'#000'} size={24}/>
      <Icon name='add-circle-outline' color={'#000'} size={24}/>
      {/*This will be a list of books, when clicked, info of the book will be shown*/}
      <Button title="Boek X" onPress={() => this.props.navigation.navigate('SellerProfile' , {itemId: 86, otherParam: 'more info user'})}  color='#eee'/>
      <Button title="Ad A Book" onPress={() => this.props.navigation.navigate('AddBook')}/>
      </View>
    )
  }
};