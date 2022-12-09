import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign';
const Setting1 = ({title,value,name}) => {
  return (
    <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth: 0.5,
          paddingVertical: 20,
          marginHorizontal:10
        }}>
        <View
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name={name}
            style={{padding: 8, backgroundColor: 'lightgray', borderRadius: 7}}
          />
          <Text
            style={{fontFamily:'Roboto-Medium', color: 'black', marginLeft: 10,fontSize:16}}>
            {title}
          </Text>
        </View>
        <View
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Text>{value}</Text>
          <AntDesign name="home" style={{marginLeft: 10}} />
        </View>
      </View>
  )
}

export default Setting1

const styles = StyleSheet.create({})