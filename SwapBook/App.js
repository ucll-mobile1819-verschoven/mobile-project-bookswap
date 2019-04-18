import React from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import AddBookScreen from './src/screens/AddBookScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SellerProfileScreen from './src/screens/SellerProfileScreen';
import HomeScreen from './src/screens/HomeScreen';



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
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }, 
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen : MainStack,
    },
    SellerProfile: {
      screen: SellerProfileScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
