import React from 'react';
import { 
  StyleSheet, 
  SafeAreaView, 
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  } from 'react-native';

import { 
  COLOR_WHITE,
  COLOR_BLACK, 
  COLOR_GRAY,
  COLOR_BLUE
 } from '../constants/color'
import { ICON_BLUE } from '../constants/image'

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      pw: ''
    }

    this.onChangeId = this.onChangeId.bind(this);
    this.onChangePw = this.onChangePw.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.onRegister = this.onRegister.bind(this);
  }

  onChangeId = (e) => {
    this.setState({ id: e.target.value })
  }

  onChangePw = (e) => {
    this.setState({ pw: e.target.value })
  }

  onLogin = () => {
    this.props.navigation.navigate('Main')
  }

  onRegister = () => {
    this.props.navigation.navigate('Register')
  }

  static navigationOptions = ({
    header: null,
  });

  render(){
    const { id, pw } = this.state;
    return(
      <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={ICON_BLUE} />
        <View style={styles.inputWrap}>
          <Text style={styles.inputTitle}>아이디</Text>
          <TextInput style={styles.textInput} 
            multiline={false}
            autoCompleteType='username'
            onChange={(e) => this.onChangeId(e)}
            value={id}
          />
        </View>
        <View style={styles.inputWrap}>
          <Text style={styles.inputTitle}>비밀번호</Text>
          <TextInput style={styles.textInput} 
            multiline={false}
            autoCompleteType='password'
            secureTextEntry={true}
            onChange={(e) => this.onChangePw(e)}
            value={pw}
          />
        </View>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => this.onLogin()}
        >
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onRegister()}>
          <Text style={styles.link}>회원가입</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  logo: {
    width: 170,
    height: 170,
    marginTop: 76,
    marginBottom: 20
  },
  inputWrap: {
    width: "100%",
    paddingHorizontal: 34,
    marginTop: 20
  },
  inputTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLOR_BLACK
  },
  textInput: {
    marginTop: 8,
    fontSize: 16,
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: COLOR_GRAY,
    borderRadius: 4,
    color: COLOR_BLACK
  },
  button: {
    paddingHorizontal: 130,
    paddingVertical: 16,
    backgroundColor: COLOR_BLUE,
    borderRadius: 4,
    marginTop: 24
  },
  buttonText: {
    fontSize: 18,
    color: COLOR_WHITE,
    fontWeight: "bold",
  },
  link: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLOR_BLUE,
    marginTop: 60
  }
});

export default LoginScreen;