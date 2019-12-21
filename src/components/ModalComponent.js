import React from 'react'

import Modal from 'react-native-modal'

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
        swipeDirection="down"
        onSwipeComplete={() => this.returnIsVisible()}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}
      >
        {renderItem()}
      </Modal>
    )    
  }
}

export default ModalComponent;