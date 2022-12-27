import { StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import { Button } from 'react-native-paper';

const Dashboard = ({navigation}) => {
  
    const nextHandler=()=>{
        navigation.navigate('Register')
    }
    
  return (
    <View style={{backgroundColor:'white',fex:1}}>
       {/* <TouchableOpacity  style={{flexDirection:'row',alignItems:'center'}}>
          <FontAwesome5
            name="caret-right"
            size={15}
            color="blue"
            style={{position: 'relative', zIndex:50,marginLeft:10}}
          />
          <Text>menu</Text>
        </TouchableOpacity> */}
      <Image
        style={styles.image}
        source={{
          uri: 'https://images.unsplash.com/photo-1524673278499-6c651bf78b14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
        }}
      />
      <Text style={styles.heading}>Welcome to Crypto</Text>
      <Text style={styles.para}>Your Best Crypto Wallet Partner</Text>
     
      <View style={{height: 100, marginTop: 10, borderRadius: 5, display:'flex', alignItems:'center'}}>
        <Button style={styles.btn} onPress={nextHandler}>
          <Text style={{color:'white'}}>Start Now</Text>
        </Button>
      </View>
      
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontSize: 50,
    color: 'black',
    marginVertical: 1,
    fontFamily:'Roboto-Bold'
  },
  para: {
    textAlign: 'center',
    marginVertical: 5,
  },
  image: {
    width: 410,
    height: 350,
  },
  btn: {
    marginTop: 1,
    backgroundColor:'#1b64f5',
    paddingHorizontal:40,
    marginVertical:15
  },
});
