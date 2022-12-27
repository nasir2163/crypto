// import { Axios as axios } from 'axios';
import axios from 'axios';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {API_URI} from '../config';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Button} from 'react-native-paper';

const RegisterPage = ({navigation}) => {
  const selector=useSelector(state=>state.root)
  console.log(selector)
  const [userData, setSignUpUser] = useState({
    name: 'nasir',
    email: '',
    username: 'hello',
    password: '',
    role: 'admin',
  });

  const loginHandler = () => {
    navigation.navigate('Login');
  };

  const signupHandler = async () => {
    const _data = {
      ...userData,
      name: userData.email.split('@')[0],
      username: userData.email,
    };
    try {
      const userValue = await axios({
        url: API_URI + '/auth/signup',
        method: 'POST',
        data: _data,
      });
      // const userValue = await axios.post(API_URI + '/auth/signup', _data);
      if (userValue.status === 200) {
        console.log('click', userValue?.data);
        return;
      } else {
        console.log('user wrong credential');
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
      <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
        <View style={{margin: 10}}>
          <View style={styles.top}>
            <Text>Have account? </Text>
            <TouchableOpacity onPress={loginHandler}>
              <Text style={styles.login}>Log in</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.heading1}>Sign up</Text>
          <Text style={styles.heading2}>to continue</Text>
          <View>
            <Text style={[styles.label, styles.marginExtra]}>
              Email address
            </Text>
            <TextInput
              placeholder="enter your email address"
              style={styles.input}
              onChangeText={txt => setSignUpUser({...userData, email: txt})}
              value={userData.email}
            />
          </View>
          <View>
            <Text style={styles.label}>Password</Text>
            <View style={{position: 'relative'}}>
              <TextInput
                placeholder="enter your password"
                style={styles.input}
                onChangeText={txt =>
                  setSignUpUser({...userData, password: txt})
                }
                value={userData.password}
              />
              <FontAwesome5
                name="eye"
                size={20}
                style={{
                  position: 'absolute',
                  right: 10,
                  top: '40%',
                  color: '#1b64f5',
                }}
              />
            </View>
          </View>
          <View>
            <Text style={styles.label}>Confirm Password</Text>
            <View style={{position: 'relative'}}>
              <TextInput
                placeholder="enter your confirm password"
                style={styles.input}
              />
              <FontAwesome5
                name="eye"
                size={20}
                style={{
                  position: 'absolute',
                  right: 10,
                  top: '40%',
                  color: '#1b64f5',
                }}
              />
            </View>
            <Text style={{textAlign: 'right'}}>Forget Password</Text>
          </View>
          <TouchableOpacity onPress={signupHandler}>
            <Button
              style={{
                backgroundColor: '#1b64f5',
                marginVertical: 15,
                padding: 5,
                marginHorizontal: 5,
              }}>
              <Text style={{color: 'white', fontFamily: 'Roboto-Bold'}}>
                {' '}
                Sign up
              </Text>
            </Button>
          </TouchableOpacity>
          <Text style={{textAlign: 'center'}}>
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
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default RegisterPage;

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
    borderBottomWidth: 1,
    padding: 3,
    borderBottomColor: '#1b64f5',
    fontSize: 15,
    color: 'black',
    fontWeight: '400',
  },
  label: {
    marginTop: 15,
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
  },
  social: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 15,
  },
  google: {
    borderWidth: 1,
    width: 150,
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    borderColor: '#1b64f5',
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
  marginExtra: {
    marginTop: 40,
  },
});
