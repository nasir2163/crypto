import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Menu = () => {
  const navigation = useNavigation();
  const menuList = [
    {id: 1, title: 'My Wallet', name: 'home'},
    {id: 2, title: 'Portfolio', name: 'user-plus'},
    {id: 3, title: 'Static', name: 'cog'},
    {id: 4, title: 'Transfer', name: 'comment'},
    {id: 5, title: 'Withdraw', name: 'bell'},
    {id: 6, title: 'Setting', name: 'cog'},
    {id: 7, title: 'New List', name: 'user-plus'},
  ];
 const menuHandler=(title)=>{
  //  setMenu(false)
    navigation.navigate(title);
    console.log(title.trim().toLowerCase());
 }
  return (
    <View style={styles.sideMenu}>
      {/* <TouchableOpacity onPress={() => setMenu(false)}>
        <FontAwesome
          name="minus"
          size={20}
          color="blue"
          style={{position: 'absolute', right: 10}}
        />
        
      </TouchableOpacity> */}
      <View style={{paddingHorizontal: 10}}>
        {_renderHeader()}
        {menuList.map(item => (
          <TouchableOpacity
            style={[
              styles.menu
            ]}
            key={item.id}
            onPress={()=>menuHandler(item.title)}
            >
            {/* <Icon name={item.name} size={24} style={{marginRight:20}}/> */}
            <Text style={styles.menuText}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
  //   }

  function _renderHeader() {
    return (
      <View style={styles.header}>
        <View style={styles.userInfosHolder}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://images.unsplash.com/photo-1524673278499-6c651bf78b14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
            }}
          />
          <View style={styles.userInfos}>
            <Text type="h1White" style={styles.username}>
              Tony stark
            </Text>
            <Text type="h5White">View and edit profile</Text>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  sideMenu: {
    flex: 1,
    position: 'absolute',
    zIndex: 50,
    width: 250,
    backgroundColor: 'white',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
  sideMenuTitle: {
    marginLeft: 20,
    marginBottom: 30,
  },
  menu: {
    display:'flex',
    flexDirection: 'row',
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginVertical:5,
    borderRadius:10
    
    
  },
  menuText: {
    textAlign:'justify',
    fontFamily: 'Roboto-Bold',
    fontSize:15,
    
    
  },
  header: {
    marginTop: 20,
    marginBottom: 20,
  },
  userInfosHolder: {
    display:'flex',
    marginLeft:20
    // alignItems:'center',
    // justifyContent:'center'
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userInfos: {
    height: 50,
    
    // alignItems:'center',
  },
  username: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'Alef-Bold'
  },
});

export default Menu;
