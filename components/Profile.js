import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import {List, MD3Colors, Button} from 'react-native-paper';

const Profile = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'white'}}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: 'https://images.unsplash.com/photo-1524673278499-6c651bf78b14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
          }}
        />
      </View>
      <View style={{width:'100%',marginTop:30,paddingHorizontal:10}}>
        <View style={styles.name}>
          <Text style={styles.label}>Full name</Text>
          <TextInput
            placeholder="enter your name"
            style={styles.input}
          />
        </View>
        <View style={styles.name}>
          <Text style={styles.label}>Email address</Text>
          <TextInput
            placeholder="enter your email address"
            style={styles.input}
          />
        </View>
        <View style={styles.name}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="enter your password"
            style={styles.input}
          />
        </View>
        <Button style={styles.btn}>
            <Text style={{color:'white',fontFamily:'Roboto-Bold',fontSize:18}}>save</Text>
        </Button>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  name: {
    alignSelf: 'flex-start',
    width: '100%',
    marginVertical: 5,
  },
  input: {
    height: 40,
    marginVertical: 5,
    borderBottomWidth: 1,
    padding: 3,
    borderBottomColor: '#1b64f5',
    fontSize: 15,
    color: 'black',
    fontFamily:'Roboto-Regular'
  },
  btn:{
    backgroundColor:'#1b64f5',
    padding:5,
    marginTop:30,
  },
  label:{
    fontFamily:'Roboto-Bold',
    fontSize:15
  }
});
