import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScanItem = () => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
      <Image source={require("../../assets/images/barcode.jpg")} style={{width:300,height:300}} />
      <Text style={{fontFamily:'Roboto-Bold',fontSize:20,color:'black',marginTop:40}}>Align QR code within frame to scan</Text>
      <Text style={{fontFamily:'Roboto-Bold',fontSize:20,color:'black'}}>scanning code........</Text>
    </View>
  )
}

export default ScanItem

const styles = StyleSheet.create({})