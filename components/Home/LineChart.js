import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import {Button, Searchbar} from 'react-native-paper';

export default function LineChart1() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Searchbar
          style={{backgroundColor: 'white', marginHorizontal: 5, color: 'gray'}}
          placeholder="search"
          placeholderTextColor="gray"
        />
        <LineChart
          data={{
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={500} // from react-native
          height={250}
          chartConfig={{
            borderRadius: 20,
            backgroundColor: '#fff',
            backgroundGradientFrom: '#ffff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 0, // optional, defaults to 2dp
            color: () => `rgb(11, 222, 152)`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              // borderRadius: 16
            },
            propsForDots: {
              r: '6',
              // strokeWidth: "2",
              // stroke: "#ffa726"
            },
          }}
          bezier
          style={{
            marginVertical: 20,
            borderRadius: 16,
          }}
        />
        <View
          style={{
            backgroundColor: `rgba(0,0,0,.05)`,
            borderRadius: 20,
            marginTop: -40,
            position: 'relative',
            paddingBottom: 10,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              paddingHorizontal: 30,
              marginTop: 10,
            }}>
            <Text style={{fontSize: 15, fontFamily: 'Roboto-Bold'}}>
              Market
            </Text>
            <TouchableOpacity>
              <Text style={{color: 'blue', marginLeft: 260}}>see all</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
              backgroundColor: 'white',
              borderRadius: 20,
              margin: 10,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: 'blue',
                  borderRadius: 100,
                  marginRight: 15,
                }}></Text>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Roboto-Bold',
                    color: 'black',
                  }}>
                  BTC-USD
                </Text>
                <Text>Limit sell-10.36</Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Roboto-Bold',
                  color: 'black',
                }}>
                0.000367 BTC
              </Text>
              <Text style={{textAlign: 'right'}}>$1.52500</Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
              backgroundColor: 'white',
              borderRadius: 20,
              margin: 10,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: 'blue',
                  borderRadius: 100,
                  marginRight: 15,
                }}></Text>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Roboto-Bold',
                    color: 'black',
                  }}>
                  BTC-USD
                </Text>
                <Text>Limit sell-10.36</Text>
              </View>
            </View>
            <View style={{display:'flex',flexDirection:'row'}}>
              <Button
                style={{
                  backgroundColor: 'lightgreen',
                  borderRadius: 10,
                  padding: 2,
                  paddingHorizontal: 20,
                  marginRight:5
                }}
                textColor="white">
                Buy
              </Button>
              <Button
                style={{
                  backgroundColor: 'red',
                  borderRadius: 10,
                  padding: 2,
                  paddingHorizontal: 20,
                }}
                textColor="white">
                Buy
              </Button>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
