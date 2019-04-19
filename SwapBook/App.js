import React from 'react';
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator, createSwitchNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from './src/components/Logo';

import HomeScreen from './src/screens/HomeScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SellerProfileScreen from './src/screens/SellerProfileScreen';
import AddBookScreen from './src/screens/AddBookScreen';


const DashboardTabNavigator = createMaterialTopTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      tabBarLabel: 'Home',
      tabBarIcon:() => (
        <Icon name='ios-home' color={'#000'} size={24}/>
      ) ,
    },
    Profile: {
      screen: ProfileScreen,
      tabBarLabel: 'Profile',
      tabBarIcon:({tintColor}) => (
        <Icon name='account-circle' color={tintColor} size={24}/>
      ) , 
    },
    AddBook: {
      screen: AddBookScreen,
      tabBarLabel: 'AddBook',
      tabBarIcon:({tintColor}) => (
        <Icon name='add-circle' color={tintColor} size={24}/>
      ) ,
    }, 
  },

  {
    initialRouteName: 'Home',
    order: ['Profile', 'Home', 'AddBook'],
    tabBarPosition: 'bottom',
    tabBarOptions:{
      activeTintColor: 'orange',
      inactiveTintColor: '#f2f2f2',
      style: {
        backgroundColor: '#164050',
      },
      indicatorStyle: {
        height: 0,
      },
      showIcon: true,
    },
  }, 
    {//finds and returns name but doesn't want to mix with the other settings
 navigationOptions: ({navigation}) => {
  const{ routeName} = navigation.state.routes[navigation.state.index];
  console.log(routeName);
  return {
    headerTitle: routeName,
    headerLeft: (
      <Logo/>
    )
  };
}
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
  {
    navigationOptions: ({navigation}) => {
      const{ routeName} = navigation.state.routes[navigation.state.index];
      //console.log(routeName);
      return {
        headerTitle: routeName,
        headerLeft: (
          <Logo/>
        )
      }  
    },
  },
  {
    navigationOptions: () => ({
      headerTitle: <Logo/>,
  })
  }

);


const SwitchNavigator = createSwitchNavigator({
  Welcome: {screen: WelcomeScreen},
  Tabnav: {screen: RootStack}
})

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




/*
//stacknav
const MainStack = createStackNavigator(
  
  {
    Home: {
      screen: HomeScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
    AddBook: {
      screen: AddBookScreen,
    }, 
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#164050',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  
);*/