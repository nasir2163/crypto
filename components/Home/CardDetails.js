import {StyleSheet, Text, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import React from 'react';

const CardDetails = () => {
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: 15,
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingBottom:100
      }}>
   
      <TextInput
        label="Card Number"
        mode="outlined"
        outlineColor="white"
        activeOutlineColor="lightgray"
        outlineStyle={{borderBottomWidth: 1, borderBottomColor: 'blue'}}
        style={{
          backgroundColor: 'white',
          marginTop: 20,
        }}
      />
      <TextInput
        label="Holder Name"
        mode="outlined"
        outlineColor="white"
        activeOutlineColor="lightgray"
        outlineStyle={{borderBottomWidth: 1, borderBottomColor: 'blue'}}
        style={{
          backgroundColor: 'white',
          marginTop: 30,
        }}
      />
      <TextInput
        label="Valid"
        mode="outlined"
        outlineColor="white"
        activeOutlineColor="lightgray"
        outlineStyle={{borderBottomWidth: 1, borderBottomColor: 'blue'}}
        style={{
          backgroundColor: 'white',
          marginTop: 30,
        }}
      />
      <TextInput
        label="CVV"
        mode="outlined"
        outlineColor="white"
        activeOutlineColor="lightgray"
        outlineStyle={{borderBottomWidth: 1, borderBottomColor: 'blue'}}
        style={{
          backgroundColor: 'white',
          marginTop: 30,
        }}
      />
      <Button style={styles.btn}>
        <Text style={{color: 'white', fontFamily: 'Roboto-Bold', fontSize: 18}}>
          save
        </Text>
      </Button>
    </View>
  );
};

export default CardDetails;

const styles = StyleSheet.create({
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
    fontFamily: 'Roboto-Regular',
  },
  btn: {
    backgroundColor: '#1b64f5',
    padding: 5,
    marginTop: 50,
  },
  label: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
  },
});
