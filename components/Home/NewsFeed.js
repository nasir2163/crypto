import { StyleSheet, Text, View,Image, ScrollView } from 'react-native'
import React from 'react'


export default function NewsFeed() {
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <ScrollView>
      <View style={{display:'flex',flexDirection:'row',marginHorizontal:10,marginTop:10}}>
        <Image source={require("../../assets/images/bitcoin.jpg")} style={{width:150,height:150,borderRadius:20,marginRight:10}}/>
       <View>
       <Text style={{fontSize:22,color:'black',marginRight:150}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </Text>
        <Text>By nasir</Text>
       </View>
      </View>
      <View style={{display:'flex',flexDirection:'row',marginHorizontal:10,marginTop:10}}>
        <Image source={require("../../assets/images/bitcoin.jpg")} style={{width:150,height:150,borderRadius:20,marginRight:10}}/>
       <View>
       <Text style={{fontSize:22,color:'black',marginRight:150}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </Text>
        <Text>By nasir</Text>
       </View>
      </View>
      <View style={{display:'flex',flexDirection:'row',marginHorizontal:10,marginTop:10}}>
        <Image source={require("../../assets/images/bitcoin.jpg")} style={{width:150,height:150,borderRadius:20,marginRight:10}}/>
       <View>
       <Text style={{fontSize:22,color:'black',marginRight:150}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </Text>
        <Text>By nasir</Text>
       </View>
      </View>
      <View style={{display:'flex',flexDirection:'row',marginHorizontal:10,marginTop:10}}>
        <Image source={require("../../assets/images/bitcoin.jpg")} style={{width:150,height:150,borderRadius:20,marginRight:10}}/>
       <View>
       <Text style={{fontSize:22,color:'black',marginRight:150}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </Text>
        <Text>By nasir</Text>
       </View>
      </View>
      <View style={{display:'flex',flexDirection:'row',marginHorizontal:10,marginTop:10}}>
        <Image source={require("../../assets/images/bitcoin.jpg")} style={{width:150,height:150,borderRadius:20,marginRight:10}}/>
       <View>
       <Text style={{fontSize:22,color:'black',marginRight:150}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </Text>
        <Text>By nasir</Text>
       </View>
      </View>
      
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})