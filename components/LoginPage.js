import axios from 'axios';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { setLoggedInUser,setIsLoggedIn } from '../Redux/Slice/LoginSlice';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button} from 'react-native-paper';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {API_URI} from '../config';
const LoginPage = ({navigation}) => {
  const [loginData, setLoginData] = useState({username: '', password: ''});
  
  const dispatch=useDispatch()

  const loginPage = () => {
    navigation.navigate('Register');
  };

  const loginHandler = async () => {
    try {
      const res = await axios({
        url: API_URI + '/auth/signin',
        method: 'POST',
        data: {...loginData},
      });
      if (res.status === 200) {
        console.log('user login data', res?.data);
        dispatch(setIsLoggedIn(true))
        dispatch(setLoggedInUser(res?.data))
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{x: 0, y: 0}}
      scrollEnabled={false}
      style={{backgroundColor: 'white'}}>
      <SafeAreaView >
        <View style={{margin: 10}}>
          <View style={styles.top}>
            <Text>New User? </Text>
            <TouchableOpacity onPress={loginPage}>
              <Text style={styles.login}>create account</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.heading1}>Log in</Text>
          <Text style={styles.heading2}>to continue</Text>
          <View>
            <Text style={[styles.label,styles.marginExtra]}>Email</Text>
            <TextInput
              placeholder="enter your email address"
              style={styles.input}
              onChangeText={txt => setLoginData({...loginData, username: txt})}
            />
          </View>
          <View style={{position: 'relative'}}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              placeholder="enter your password"
              style={styles.input}
              onChangeText={txt => setLoginData({...loginData, password: txt})}
            />
            <FontAwesome5
              name="eye"
              size={20}
              style={{
                position: 'absolute',
                right: 10,
                top: '60%',
                color: '#1b64f5',
              }}
            />
          </View>
          <Text style={{textAlign: 'right'}}>Forget Password</Text>
          <Button style={styles.btn} onPress={loginHandler}>
            <Text style={{color: 'white', fontFamily: 'Roboto-Bold'}}>
              Log in
            </Text>
          </Button>
          <View>
            <Text style={{textAlign: 'center', marginVertical: 5}}>
              ---------------or---------------
            </Text>
            <View style={styles.social}>
              <TouchableOpacity style={styles.google}>
                <FontAwesome5 name={'facebook'} color="#1b64f5" size={20} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.google}>
                <FontAwesome5 name={'apple'} size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  heading1: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Roboto-Bold',
    marginTop: 50,
  },
  heading2: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Roboto-Bold',
  },
  input: {
    height: 40,
    marginVertical: 10,
    borderBottomWidth: 0.5,
    padding: 3,
    borderBottomColor: '#1b64f5',
    fontSize: 15,
  },
  label: {
    marginTop: 20,
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
  },
  social: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
  },
  google: {
    borderWidth: 1,
    width: 150,
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    borderColor: 'gray',
  },
  login: {
    color: '#1b64f5',
    fontFamily: 'Roboto-Bold',
  },
  top: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  btn: {
    backgroundColor: '#1b64f5',
    marginVertical: 20,
    marginHorizontal: 10,
    padding: 5,
  },
  marginExtra:{
    marginTop:50
  }
});
