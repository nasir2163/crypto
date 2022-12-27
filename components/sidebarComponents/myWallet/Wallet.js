import {ScrollView, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
const Wallet = ({navigation}) => {
  const walletData = [
    {id: 1, title: 'Dashboard', svg: 'home'},
    {id: 2, title: 'Set Limits', svg: 'heart'},
    {id: 3, title: 'Widraw', svg: 'money'},
    {id: 4, title: 'Load Funds', svg: 'image'},
    {id: 5, title: 'Transfer', svg: 'money'},
    {id: 6, title: 'Block Card', svg: 'stop'},
  ];
  function calledWallet(data){
    if(data.id==6){
      navigation.navigate("Add New Card")
      return;
    }
    if(data.id==5){
      navigation.navigate("Transfer")
      return;
    }
    if(data.id==3){
      navigation.navigate("Withdraw")
      return;
    }
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          paddingBottom: 30,
        }}>
        <Text style={{fontSize: 20}}>Available Balance</Text>
        <Text
          style={{fontSize: 38, color: 'black', fontFamily: 'Roboto-Black'}}>
          $37890.987
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {walletData.map(item => (
            <TouchableOpacity onPress={()=>calledWallet(item)}>
                 <View
              style={{
                padding: 5,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 20,
              }}>
              <Icon name={item.svg} />
              <Text
                style={{
                  // fontFamily: 'Alef-Bold',
                  fontSize: 15,
                  marginTop: 5,
                  color: 'black',
                }}>
                {item.title}
              </Text>
            </View>
            </TouchableOpacity>
          ))}
        </View>
        <Text
          style={{
            textAlign: 'left',
            fontSize: 20,
            width: '100%',
            paddingHorizontal: 10,
            fontFamily:'Roboto-Regular',
            marginTop:-10
          }}>
          My Cards
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginHorizontal: 10}}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/7821738/pexels-photo-7821738.jpeg?auto=compress&cs=tinysrgb&w=600',
            }}
            style={{height: 250, width: 400, marginRight: 10, borderRadius: 10}}
          />
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/7821738/pexels-photo-7821738.jpeg?auto=compress&cs=tinysrgb&w=600',
            }}
            style={{height: 250, width: 400, borderRadius: 10}}
          />
        </ScrollView>
        <Text
          style={{
            fontSize: 20,
            width: '100%',
            paddingHorizontal: 10,
            marginTop: 8,
            marginBottom:10,
            fontFamily:'Roboto-Regular'
          }}>
          Send to
        </Text>
        <ScrollView
          horizontal
          style={{marginHorizontal: 10}}
          showsHorizontalScrollIndicator={false}>
          <Text
            style={{
              backgroundColor: 'lightgray',
              width: 60,
              height: 60,
              borderRadius: 100,
            //   display:'flex',
            //   alignItems:'center',
            //   justifyContent:'center',
              textAlign:'center',
               marginRight:10,
            //   color:'white',
              fontSize:40,
              
            }}>
            +
          </Text>
          {walletData.map(item => (
            <View
              style={{marginRight: 10, display: 'flex', alignItems: 'center'}}>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1524673278499-6c651bf78b14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
                }}
              />
              <Text style={{color: 'black'}}>Reddy</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
});
