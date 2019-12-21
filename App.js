/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'mobx-react';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

import HomeScreen from './src/screens/HomeScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import NotificationScreen from './src/screens/NotificationScreen'

import stores from './src/stores'

class App extends React.Component{
  render(){
    return (
      <>
        <StatusBar barStyle="dark-content"/>
        <Provider {...stores}>
          <AppContainer/>
        </Provider>
      </>
    );
  }
}

const LoginStack = createStackNavigator(
  {
    Login: { 
      screen: LoginScreen,
      routeName: '로그인',
    },
    Register : { 
      screen: RegisterScreen,
      routeName: '회원가입',
    }
  },
  {
    defaultNavigationOptions: ({
      headerStyle: {
        elevation: 0,
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        backgroundColor: '#fff',
        shadowColor: "transparent"
      }
    })
  }
)

const HomeStack = createStackNavigator(
  {
    Home: { 
      screen: HomeScreen,
      routeName: '메인',
    },
    Profile: { 
      screen: ProfileScreen,
      routeName: '프로필',
    },
    Notification: { 
      screen: NotificationScreen,
      routeName: '알림',
    }
  },
  {
    defaultNavigationOptions: ({
      headerStyle: {
        elevation: 0,
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        backgroundColor: '#fff',
        shadowColor: "transparent"
      }
    })
  }
)

const MainStack = createStackNavigator(
  {
    Home: { screen: HomeStack },
  },
  {
    defaultNavigationOptions: ({
      headerStyle: {
        elevation: 0,
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        height: 0,
        backgroundColor: '#fff',
        shadowColor: "transparent"
      }
    })
  }
)

const MainSwitch = createSwitchNavigator({
  Login: LoginStack,
  Main: MainStack
})

const AppContainer = createAppContainer(MainSwitch);

export default App;
