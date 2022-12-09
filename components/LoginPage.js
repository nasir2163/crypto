import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button} from 'react-native-paper';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const LoginPage = ({navigation}) => {
  const loginHandler = () => {
    navigation.navigate('Register');
  };
  return (
    <SafeAreaView style={{backgroundColor:'white'}}>
      <View style={{margin: 10}}>
        <View style={styles.top}>
          <Text>New User? </Text>
          <TouchableOpacity onPress={loginHandler}>
            <Text style={styles.login}>create account</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.heading1}>Log in</Text>
        <Text style={styles.heading2}>to continue</Text>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="enter your email address"
            style={styles.input}
          />
        </View>
        <View style={{position: 'relative'}}>
        <Text style={styles.label}>Password</Text>
          <TextInput placeholder="enter your password" style={styles.input} />
          <FontAwesome5
            name="eye"
            size={20}
            style={{position: 'absolute', right: 10, top: '40%',color:'#1b64f5'}}
          />
        </View>
        <View>
          <Text style={{textAlign: 'right'}}>Forget Password</Text>
          {/* <View style={{height: 100, paddingVertical: 20}}>
              <Button title="Log in" />
            </View> */}
          <Button style={styles.btn}>
            <Text style={{color: 'white',fontFamily:'Roboto-Bold'}}>Log in</Text>
          </Button>
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
  );
};

export default LoginPage;

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
    borderBottomWidth: 0.5,
    padding: 3,
    borderBottomColor: '#1b64f5',
    fontSize: 15,
    
    
  },
  label: {
    marginTop: 30,
    fontSize: 15,
    fontFamily:'Roboto-Medium'
    
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
    fontFamily:'Roboto-Bold'
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
});
