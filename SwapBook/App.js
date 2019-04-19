import React from 'react';
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator, createSwitchNavigator, createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from './src/components/Logo';

import HomeScreen from './src/screens/HomeScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SellerProfileScreen from './src/screens/SellerProfileScreen';
import AddBookScreen from './src/screens/AddBookScreen';
import RegisterScreen from './src/screens/RegisterScreen';


const DashboardTabNavigator = createMaterialTopTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOption: {
        tabBarLabel: 'Home',
        tabBarIcon:({tintColor}) => {
          return <Icon name={'ios-home'} color={tintColor} size={20}/>
       } ,
      }
     
    },
    Profile: {
      screen: ProfileScreen,
      navigationOption: {
        tabBarLabel: 'Profile',
        tabBarIcon:({tintColor}) => {
          return <Icon name={'ios-person'} color={'#fff'} size={20}/>
       } ,
      }
    },
    AddBook: {
      screen: AddBookScreen,
      navigationOption: {
        tabBarLabel: 'AddBook',
        tabBarIcon:({tintColor}) => {
          return <Icon name={'ios-add-circle'} color={"#000"} size={20}/>
       } ,
      }    
    }, 
  },
  { 
    initialRouteName: 'Home',
    order: ['Profile', 'Home', 'AddBook'],
    tabBarPosition: 'bottom',
    tabBarOptions:{
      showIcon: true,
      showLabel:false,
      activeTintColor: 'orange',
      inactiveTintColor: '#f2f2f2',
      style: {
        backgroundColor: '#0BB586',
      },
      indicatorStyle: {
        height: 0,
      },
    },
  }, 
);



const RootStack = createStackNavigator(
  {
    Main: {
      screen : DashboardTabNavigator,
    },
    SellerProfile: {
      screen: SellerProfileScreen,
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