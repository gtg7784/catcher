import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image
  } from 'react-native';
import { StackActions } from 'react-navigation-stack';

import { 
  COLOR_WHITE,
  COLOR_BLACK,
  COLOR_BLUE,
  COLOR_GRAY
  } from '../constants/color'

import { ICON_NOTI, ICON_BACK, ICON_PROFILE } from '../constants/image'
import { width, height } from '../constants/size'

class HeaderComponent extends React.Component{
  constructor(props){
    super(props);

    this.onProfile = this.onProfile.bind(this);
    this.onNotification = this.onNotification.bind(this);
  }

  onProfile = () => {
    this.props.navigation.navigate('Profile');
  }

  onNotification = () => {
    this.props.navigation.navigate('Notification');
  }

  render(){
    const { isMain, routeName, onBackward } = this.props;
    if(isMain){
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.mainContainer}>
            <TouchableOpacity onPress={() => this.onProfile()}>
              <Image style={styles.profile} source={ICON_PROFILE}/>
            </TouchableOpacity>
            <Text style={styles.mainText}>CATCHER</Text>
            <TouchableOpacity onPress={() => this.onNotification()}>
              <Image source={ICON_NOTI}/>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      );
    } else {
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.mainContainer}>
            <TouchableOpacity onPress={() => onBackward()}>
              <Image source={ICON_BACK}/>
            </TouchableOpacity>
            <Text style={styles.mainText}>{routeName}</Text>
            <View style={styles.empty}/>
          </View>
        </SafeAreaView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: COLOR_WHITE
  },
  mainContainer: {
    flex: 1,
    width: width - 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    height: 80,
  },
  subContainer: {
    flex: 1
  },
  profile: {
    width: 22,
    height: 22,
    borderRadius: 12,
    backgroundColor: COLOR_GRAY
  },
  mainText: {
    fontSize: 22,
    fontWeight: '800',
    color: COLOR_BLUE
  },
  empty: {
    width: 12
  }
})

export default HeaderComponent;