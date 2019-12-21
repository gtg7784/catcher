import React from 'react';
import { View, Text } from 'react-native';

import HeaderComponent from '../components/HeaderComponent'
import SearchComponent from '../components/SearchComponent'

class HomeScreen extends React.Component {
  constructor(props){
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      header: <HeaderComponent isMain={true} routeName={navigation.state.routeName} onBackward={navigation.pop()} />,
      headerStyle: { marginTop: 24 },
    }
  };

  render(){
    return(
      <View>
        <SearchComponent/>
      </View>
    )
  }
}

export default HomeScreen;