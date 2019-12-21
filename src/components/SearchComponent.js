import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image
} from 'react-native';

import { 
  COLOR_WHITE,
  COLOR_SEARCH,
  COLOR_SEARCH_TEXT
} from '../constants/color'
import { ICON_SEARCH } from '../constants/image'
import { width } from '../constants/size'

class SearchComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.search} placeholder="연락처로 검색하기" />
        <Image source={ICON_SEARCH} style={styles.icon}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    backgroundColor: COLOR_WHITE,
    flexDirection: 'row',
    alignItems: 'center'
  },
  search: {
    width: width - 40,
    backgroundColor: COLOR_SEARCH,
    borderRadius: 4,
    height: 32,
    fontSize: 12,
    marginLeft: 20,
    paddingHorizontal: 12,
    color: COLOR_SEARCH_TEXT
  },
  icon: {
    marginLeft: -28
  }
})

export default SearchComponent;