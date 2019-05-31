import React from 'react';
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator, createSwitchNavigator, createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from './src/components/Logo';

import HomeScreen from './src/screens/HomeScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SellerProfileScreen from './src/screens/SellerProfileScreen';
import BookScreen from './src/screens/BookScreen';
import AddBookScreen from './src/screens/AddBookScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import MyBookScreen from './src/screens/MyBookScreen';
import ChangeBookScreen from './src/screens/ChangeBookScreen';

//console.disableYellowBox = true;
const DashboardTabNavigator = createMaterialTopTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions : {
     //   tabBarLabel: 'Home',
        tabBarIcon:({tintColor}) => {
          return (<Icon name="ios-home" color={tintColor} size={30}/>)
       } ,
      }
     
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions : {
       // tabBarLabel: 'Profile',
        tabBarIcon:({tintColor}) => {
          return (<Icon name={'ios-person'} color={tintColor} size={30}/>)
       } ,
      }
    },
    AddBook: {
      screen: AddBookScreen,
      navigationOptions : {
      //  tabBarLabel: 'AddBook',
        tabBarIcon:({tintColor}) => {
          return (<Icon name={'ios-add-circle'} color={tintColor} size={30}/>)
       } ,
      }    
    }, 
  },
  { 
    initialRouteName: 'Home',
    order: ['Profile', 'Home', 'AddBook'],
    tabBarPosition: 'bottom',
    tabBarOptions:{
      
      activeTintColor: '#BFFF00',
      inactiveTintColor: '#f2f2f2',
      style: {
        backgroundColor: '#0BB586',
      },
      indicatorStyle: {
        height: 0,
      },
      showIcon: true,
      showLabel:false,
    },
  }, 
);



const RootStack = createStackNavigator(
  {
    Main: {
      screen : DashboardTabNavigator,
    },
    BookScreen: {
      screen: BookScreen,
    },
    SellerProfile: {
      screen: SellerProfileScreen,
    },
    MyBookScreen: {
      screen: MyBookScreen,
    },
    ChangeBookScreen: {
      screen: ChangeBookScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);


const SwitchNavigator = createSwitchNavigator({
  Welcome: {screen: WelcomeScreen},
  Tabnav: {screen: RootStack},
  Home: {screen: HomeScreen},
  Register: {screen: RegisterScreen}
},
{})

const AppContainer = createAppContainer(SwitchNavigator);

export default class App extends React.Component {
  render() {
    return (
    
      /*   <SafeAreaView style={{flex: 1, backgroundColor: '#164050'}}>*/
        <AppContainer />
      /* </SafeAreaView>*/
     
    
    )
  }
}