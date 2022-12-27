import {ScrollView, StyleSheet, Text, View, TextInput} from 'react-native';
import {useState} from 'react';
// import {
//   MultipleSelectList,
//   SelectList,
// } from 'react-native-dropdown-select-list';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Button} from 'react-native-paper';
const Withdraw = () => {
  const [selected, setSelected] = useState([]);
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
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={{ justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>Available Balance</Text>
        <Text
          style={{fontSize: 38, color: 'black', fontFamily: 'Roboto-Black'}}>
          $37890.987
        </Text>
        <View style={{marginTop: 30}}>
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
              width: 350,
              borderColor: 'blue',
              backgroundColor: 'white',
              paddingVertical: -10,
            }}
            keyboardType="numeric"
          />
        </View>
        <View style={{backgroundColor: 'white', marginTop: 25}}>
          <Text style={styles.font}>Enter Password</Text>
          <TextInput
            style={{
              borderBottomWidth: 1,
              width: 350,
              borderColor: 'blue',
              backgroundColor: 'white',
            }}
            placeholder="Enter your password to send"
          />
        </View>
      </View>
      <Button
        buttonColor="blue"
        textColor="white"
        style={{padding: 8, marginTop: 50,marginHorizontal:10}}>
        Send
      </Button>
    </ScrollView>
  );
};

export default Withdraw;

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
    width:350
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    top: 13,
    zIndex: 999,
    paddingHorizontal: 18,
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
