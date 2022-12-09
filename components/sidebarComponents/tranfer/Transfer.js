import {StyleSheet, Text, View, TextInput} from 'react-native';
import {useState} from 'react';
import {Button} from 'react-native-paper';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Transfer = ({navigation}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const data = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Button
          textColor="white"
          style={{
            backgroundColor: 'gray',
            padding: 1,
            paddingHorizontal: 25,
            marginRight: 30,
          }} onPress={()=>navigation.navigate('send_money')}>
          Send
        </Button>
        <Button
          textColor="white"
          style={{backgroundColor: 'blue', padding: 1, paddingHorizontal: 15}}>
          Request
        </Button>
      </View>
      <View style={{marginTop: 15}}>
        <Text style={styles.font}>Send fund</Text>
        <View style={styles.container}>
          {renderLabel()}
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color={isFocus ? 'blue' : 'black'}
                name="Safety"
                size={20}
              />
            )}
          />
        </View>
      </View>
      <View style={{backgroundColor: 'white', marginTop: 25}}>
        <Text style={styles.font}>How Much?</Text>
        <TextInput
          style={{
            borderBottomWidth: 0.8,
            width: 370,
            borderColor: 'blue',
            backgroundColor: 'white',
            paddingVertical: -10,
          }}
          keyboardType="numeric"
        />
      </View>
      <View style={{backgroundColor: 'white', marginTop: 25}}>
        <Text style={styles.font}>You Want to Request</Text>
        <TextInput
          style={{
            borderBottomWidth: 1,
            width: 370,
            borderColor: 'blue',
            backgroundColor: 'white',
          }}
         value="Fahim Ahamad"
        />
      </View>
      <View style={{backgroundColor: 'white', marginTop: 25}}>
        <Text style={styles.font}>His Email</Text>
        <TextInput
          style={{
            borderBottomWidth: 1,
            width: 370,
            borderColor: 'blue',
            backgroundColor: 'white',
          }}
         value="fahim@gmail.com"
        />
      </View>
      <Button
        buttonColor="blue"
        textColor="white"
        style={{padding: 8, width: 380, marginTop: 50, marginLeft: 15}}>
        Send
      </Button>
    </View>
  );
};

export default Transfer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'blue',
    borderBottomWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: 380,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 32,
    top: 13,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  font: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
  },
});
