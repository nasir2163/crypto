import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Setting1 from './Setting1';

const Settings = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Setting1 name="envelope" title="Email" value="nasir@gmail.com"/>
      <Setting1 name="money" title="Default Currency" value="USD"/>
      <Setting1 name="lock" title="Change Pin"/>
      <Setting1 name="touch" title="Touch Id"/>
      <Setting1 name="wallet" title="Payment Method"/>
      <Setting1 name="android" title="App Version" value="16V.36T"/>
      
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
