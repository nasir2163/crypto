import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Button} from 'react-native-paper';

const RegisterPage = ({navigation}) => {
  const loginHandler = () => {
    navigation.navigate('Login');
  };
 
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center',backgroundColor:'white'}}>
      <View style={{margin:10}}>
        <View style={styles.top}>
          <Text>Have account? </Text>
          <TouchableOpacity onPress={loginHandler}>
            <Text style={styles.login}>Log in</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.heading1}>Sign up</Text>
        <Text style={styles.heading2}>to continue</Text>
        <View>
          <Text style={styles.label}>Email address</Text>
          <TextInput
            placeholder="enter your email address"
            style={styles.input}
          />
        </View>
        <View>
          <Text style={styles.label}>Password</Text>
          <View style={{position: 'relative'}}>
            <TextInput placeholder="enter your password" style={styles.input} />
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
          {/* <View style={{height: 100, paddingVertical: 20}}>
            <Button title="Sign Up" />
          </View> */}
          <TouchableOpacity>
            <Button
              style={{
                backgroundColor: '#1b64f5',
                marginVertical: 15,
                padding: 5,
                marginHorizontal: 5,
              }}>
              <Text style={{color: 'white',fontFamily:'Roboto-Bold'}}> Sign up</Text>
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
      </View>
    
    </SafeAreaView>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  heading1: {
    fontSize: 30,
    color: 'black',
    fontFamily:'Roboto-Bold',
    marginTop: 10,
  },
  heading2: {
    fontSize: 30,
    color: 'black',
    fontFamily:'Roboto-Bold'
  },
  input: {
    height: 40,
    marginVertical: 10,
    borderBottomWidth: 0.8,
    padding: 3,
    borderBottomColor: '#1b64f5',
    fontSize: 15,
    color: 'black',
    fontWeight: '400',
  },
  label: {
    marginTop: 15,
    fontSize: 15,
    fontFamily:'Roboto-Medium'
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
    fontFamily:'Roboto-Bold'
  },
  top: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
