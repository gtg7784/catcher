import React from 'react';
import { 
  StyleSheet,
  View
} from 'react-native';
import Modal from 'react-native-modal';

import { COLOR_WHITE, COLOR_BLACK, COLOR_SEARCH_TEXT } from '../constants/color';

class ModalComponent extends React.Component{
  constructor(props) {
    super(props)
    this.returnIsVisible = this.returnIsVisible.bind(this)
  }

  state = {
    isVisible: this.props.isVisible
  }

  toggleModal = () => {
    const { isVisible } = this.state
    this.setState({
      isVisible: !isVisible
    })
  }

  returnIsVisible = () => {
    const { isVisible } = this.state
    this.setState({
      isVisible: true
    }, () => this.setState({
      isVisible: false
    }))

    console.log(isVisible)
  }

  render() {
    const { renderItem } = this.props
    const { isVisible } = this.state

    return (
      <Modal
        isVisible={isVisible}
        onBackdropPress={() => this.returnIsVisible()}
        onSwipeComplete={() => this.returnIsVisible()}
      >
        <View style={styles.container}>
          <Text style={styles.title}>나가기</Text>
          <Image source={ICON_ILLUST} />
          <Text style={styles.description}>정말로 일원에서 나가시겠습니까?</Text>
          <View style={styles.buttonWrap}>
            <TouchableOpacity style={styles.calcel}>
              <Text style={styles.text}>취소하기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quit}>
              <Text tyle={styles.text}>나가기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )    
  }
}

const styles = StyleSheet.create({
  container: {
    width: 280,
    height: 260,
    borderRadius: 12,
    backgroundColor: COLOR_WHITE,
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    color: COLOR_BLACK,
    fontWeight: "bold",
    marginBottom: 20
  },
  description: {
    marginTop: 28,
    fontSize: 12,
    fontWeight: "500",
    color: COLOR_BLACK
  },
  buttonWrap: {
    width: '100%',
    marginTop: 30
  },
  calcel: {
    width: 140,
    height: 45,
    backgroundColor: COLOR_SEARCH_TEXT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  quit: {
    width: 140,
    height: 45,
    backgroundColor: '#ff6584',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: COLOR_WHITE
  }
})

export default ModalComponent;