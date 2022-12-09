import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Footer = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:'center',
        position: 'relative',
        paddingVertical:5
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Icon name="home" size={20} color="#1b64f5" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Pin')}>
        <Icon name="star" size={20} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Scan Item')}
        style={{top:-20}}
        >
        <Icon
          name="square"
          size={20}
          style={{backgroundColor: '#1b64f5', borderRadius: 15, paddingHorizontal: 18,paddingVertical:15}}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('News Feed')}>
        <Icon name="clock" size={20} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Icon name="user" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
