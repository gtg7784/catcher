import React from 'react';
import { 
  StyleSheet, 
  ScrollView,
  View, 
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import { 
  COLOR_BLACK, 
  COLOR_GRAY,
  COLOR_BLUE,
  COLOR_WHITE
 } from '../constants/color'

import HeaderComponent from '../components/HeaderComponent'

const options = {
  title: 'Select Profile',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class RegisterScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      phone: '',
      id: '',
      pw: '',
      pwCheck: '',
      role: '',
      picture: ''
    }

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangePw = this.onChangePw.bind(this);
    this.onChangePwCheck = this.onChangePwCheck.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.onChangePicture = this.onChangePicture.bind(this); 
  }

  static navigationOptions = ({ navigation }) => ({
    header: <HeaderComponent isMain={false} routeName={navigation.state.routeName} onBackward={() =>navigation.pop()} />,
    headerStyle: { marginTop: 24 },
  })

  onChangeName = (e) => {
    this.setState({
      name: e.target.value 
    })
  }

  onChangePhone = (e) => {
    this.setState({
      phone: e.target.value
    })
  }

  onChangeId = (e) => {
    this.setState({
      id: e.target.value
    })
  }

  onChangePw = (e) => {
    this.setState({
      pw: e.target.value
    })
  }

  onChangePwCheck = (e) => {
    this.setState({
      pwCheck: e.target.value
    })
  }

  onChangeRole = (e) => {
    this.setState({
      role: e.target.value
    })
  }

  onChangePicture = (e) => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.setState({
          picture: response.uri
        });
      }
    });
  }

  onRegister = () => {
    this.props.navigation.pop()
  }

  render(){
    const { name, phone, id, pw, pwCheck, role } = this.props;
    return(
      <ScrollView>
        <View style={styles.inputWrap}>
          <Text style={styles.inputTitle}>이름</Text>
          <TextInput style={styles.textInput} 
            multiline={false}
            onChange={(e) => this.onChangeName(e)}
            value={name}
          />
        </View>
        <View style={styles.inputWrap}>
          <Text style={styles.inputTitle}>전화번호</Text>
          <TextInput style={styles.textInput} 
            multiline={false}
            onChange={(e) => this.onChangePhone(e)}
            value={id}
          />
        </View>
        <View style={styles.inputWrap}>
          <Text style={styles.inputTitle}>아이디</Text>
          <TextInput style={styles.textInput} 
            multiline={false}
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
        <View style={styles.inputWrap}>
          <Text style={styles.inputTitle}>비밀번호 확인</Text>
          <TextInput style={styles.textInput} 
            multiline={false}
            autoCompleteType='password'
            secureTextEntry={true}
            onChange={(e) => this.onChangePwCheck(e)}
            value={pwCheck}
          />
        </View>
        <View style={styles.inputWrap}>
          <Text style={styles.inputTitle}>가정 내 역할</Text>
          <TextInput style={styles.textInput} 
            multiline={false}
            autoCompleteType='username'
            onChange={(e) => this.onChangeRole(e)}
            value={role}
          />
        </View>
        <View style={styles.inputWrap}>
          <Text style={styles.inputTitle}>프로필 사진</Text>
          <TouchableOpacity 
            style={styles.picture}
            onPress={() => this.onChangePicture()}
          >
          </TouchableOpacity>
        </View>
        <View style={styles.inputWrap}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => this.onRegister()}
          >
            <Text style={styles.buttonText}>수정 완료하기</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  picture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLOR_BLUE,
    marginTop: 16
  },
  button: {
    width: "100%",
    paddingHorizontal: 104,
    paddingVertical: 16,
    backgroundColor: COLOR_BLUE,
    borderRadius: 4,
    marginVertical: 24,
  },
  buttonText: {
    fontSize: 18,
    color: COLOR_WHITE,
    fontWeight: "bold",
  },
});

export default RegisterScreen;