import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import { COLOR_BLACK } from '../constants/color'

import HeaderComponent from '../components/HeaderComponent'

class MemberScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [
        {name: '박민준', phone: '010-3018-8488'}
      ],
      key: 0
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
      <View style={styles.container}>
        {this.state.members.map((item, index) => {
          <View style={styles.list}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subtitle}>{item.phone}</Text>
          </View>
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  list: {
    flexDirection: 'column',
    paddingLeft: 20
  },
  title: {
    fontSize: 12,
    color: COLOR_BLACK
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "300",
  }
})

export default MemberScreen;