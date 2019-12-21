import React from 'react';
import { 
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import {
  COLOR_WHITE,
  COLOR_MODAL_BAR,
  COLOR_BLACK,
  COLOR_BLUE,
  COLOR_SEARCH_TEXT,
  COLOR_SEARCH
} from '../constants/color'
import { ICON_PROFILE, ICON_SEARCH } from '../constants/image'
import { width, height } from '../constants/size'

import HeaderComponent from '../components/HeaderComponent'
import SearchComponent from '../components/SearchComponent'
import ModalComponent from '../components/ModalComponent'

class HomeScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      markers: [
        {
          latlng: {latitude: 37.466374, longitude: 126.960454},
          title: '첫째',
          description: '서울시 관악구 봉천동 4-1'
        },
        {
          latlng: {latitude: 37.466166, longitude: 126.960440},
          title: '둘째',
          description: '서울시 관악구 봉천동 4-1'
        }
      ],
      profiles: [
        {
          picture: '',
          role: '첫째',
          name: '고태건'
        },
        {
          picture: '',
          role: '둘째',
          name: '박민준'
        }
      ]
    }

    this.onSearch = this.onSearch.bind(this);
    this.onMember = this.onMember.bind(this);
  }

  onSearch = () => {
    this.props.navigation.navigate('Search');
  }

  onMember = () => {
    this.props.navigation.navigate('Member');
  }

  static navigationOptions = ({ navigation }) => {
    return {
      header: <HeaderComponent isMain={true} routeName={navigation.state.routeName} onBackward={() => navigation.pop()} />,
      headerStyle: { marginTop: 24 },
    }
  };

  render(){
    return(
      <>
        <MapView style={styles.container}>
          <View style={styles.searchWrap}>
            <TouchableOpacity onPress={() => this.onSearch()}>
              <View style={styles.search}>
                <Text style={styles.searchTitle}>연락처로 검색하기</Text>
                <Image source={ICON_SEARCH} />
              </View>
            </TouchableOpacity>
          </View>
          {this.state.markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            />
          ))}
          <View style={styles.modalWrap}>
            <View style={styles.nameWrap}>
              <Text style={styles.title}>가족 구성원</Text>
              <TouchableOpacity onPress={() => this.onMember()}>
                <Text style={styles.all}>전체보기</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.profileWrap}>
              {this.state.profiles.map((item, index) => (
                <Image source={ICON_PROFILE} style={{
                  zIndex: 3,
                  marginHorizontal: 10,
                  width: 32,
                  height: 32,
                }}/>)
              )}
            </View>
          </View>
        </MapView>
        {/* <ModalComponent /> */}
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  modalWrap: {
    zIndex: 1,
    marginTop: height - 300,
    width: width,
    height: 150,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: COLOR_WHITE,
    flexDirection: 'column',
    alignItems: 'center'
  },
  modalBar: {
    zIndex: 2,
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: COLOR_MODAL_BAR,
    marginTop: 12
  },
  nameWrap: {
    marginLeft: 20,
    marginRight: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    width: width - 38
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: COLOR_BLACK
  },
  all: {
    fontSize: 16,
    fontWeight: "600",
    color: COLOR_BLUE
  },
  profileWrap: {
    zIndex: 4,
    width: width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6
  },
  searchTitle: {
    fontSize: 12,
    color: COLOR_SEARCH_TEXT
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width - 40,
    backgroundColor: COLOR_SEARCH,
    borderRadius: 4,
    height: 32,
    marginLeft: 20,
    paddingHorizontal: 12,
  },
  searchWrap: {
    width: '100%',
    height: 48,
    backgroundColor: COLOR_WHITE,
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default HomeScreen;