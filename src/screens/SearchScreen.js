import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

import { COLOR_MODAL_BAR, COLOR_BLACK, ICON_PROFILE } from '../constants/color'

import HeaderComponent from '../components/HeaderComponent';
import SearchComponent from '../components/SearchComponent';

class SearchScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      user: [
        {
          picture: 'aa',
          name: 'aa',
          phone: '00'
        }
      ]
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      header: <HeaderComponent isMain={false} routeName={navigation.state.routeName} onBackward={() => navigation.pop()} />,
      headerStyle: { marginTop: 24 },
    }
  };

  render(){
    return(
      <View>
        <SearchComponent/>
        {this.state.user.map((item, index) => (
          <View style={styles.list}>
            <Image style={styles.profile} source={ICON_PROFILE} />
            <View style={styles.info}>
              <Text style={styles.name}>Name</Text>
              <Text style={styles.phone}>Phone no</Text>
            </View>
          </View>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    height: 56,
    borderBottomWidth: 1,
    borderColor: COLOR_MODAL_BAR,
    flexDirection: 'row',
    alignItems: 'center'
  },
  profile: {
    width: 32,
    height: 32,
    marginLeft: 28
  },
  info: {
    marginLeft: 12,
    flexDirection: 'column'
  },
  name: {
    fontSize: 12,
    fontWeight: '600',
    borderBottomWidth: 2,
    color: COLOR_BLACK
  },
  phone: {
    fontSize: 12,
    fontWeight: '300',
    color: COLOR_BLACK,
  }
})

export default SearchScreen;