import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Logo = ({item}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#1b64f5',
        justifyContent: 'space-around',
        borderRadius: 20,
        paddingVertical: 15,
        width: '50%',
        marginHorizontal: 5,
        marginTop: 10,
      }}>
      {item.image ? (
        <View style={{backgroundColor:'yellow',padding:10,borderRadius:10,marginLeft:-20}}>
          <FontAwesome5 name="shopping-cart" size={20} color="white"/>
        </View>
      ) : (
        <View style={{display: 'flex', flexDirection: 'row',elevation:10}}>
          <Text
            style={{
              height: 20,
              width: 20,
              backgroundColor: 'red',
              borderRadius: 100,
              // elevation:5
            }}></Text>
          <Text
            style={{
              height: 20,
              width: 20,
              backgroundColor: 'yellow',
              borderRadius: 100,
              opacity: 0.7,
              marginLeft: -10,
              elevation:5
            }}></Text>
        </View>
      )}
      <View style={{marginLeft:-20}}>
        <Text style={{fontFamily:'Roboto-Medium'}}>{item.title}</Text>
        <Text>
          <Text style={{fontFamily:'Roboto-Medium'}}>{item.text}</Text>
        </Text>
      </View>
      <View>
        <Text style={{fontFamily:'Roboto-Medium'}}>{item.amount}</Text>
      </View>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({});
