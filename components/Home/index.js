import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import Logo from './Logo';
import Menu from '../../components/Menu';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Modal} from 'react-native-paper';
const Home = ({navigation}) => {
  const [slide, setSlide] = useState(false);
  const [profile, setProfile] = useState(false);
  const arrayList = [
    {id: 1, title: 'Visa', text: 'Mastercard .9390', amount: '$35678.90'},
    {id: 2, title: 'Rupay', text: 'Mastercard .9390', amount: '$35678.90'},
    {id: 3, title: 'Paypal', text: 'Mastercard .9390', amount: '$35678.90'},
  ];

  const cardHandler = () => {
    console.log('card');
  };
  const showModal = () => setProfile(true);
  const hideModal = () => setProfile(false);
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: 'white'}}
      showsVerticalScrollIndicator={false}>
      <View style={{marginHorizontal: 15}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 20,
          }}>
          <TouchableOpacity onPress={showModal}>
            <View
              style={{
                backgroundColor: '#1b64f5',
                paddingHorizontal: 20,
                borderRadius: 15,
                paddingVertical: 20,
                position: 'relative',
              }}>
              <Text
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: 'white',
                  position: 'absolute',
                  margin: 10,
                }}></Text>
              <Text
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: 'white',
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  margin: 10,
                }}></Text>
              <Text
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: 'white',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  margin: 10,
                }}></Text>
              <Text
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: 'white',
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  margin: 10,
                }}></Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            >
            <Image
              style={styles.image}
              source={{
                uri: 'https://images.unsplash.com/photo-1524673278499-6c651bf78b14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 20, fontFamily: 'Roboto-Medium'}}>Balance</Text>
        <Text style={{fontSize: 40, color: 'black', fontFamily: 'Roboto-Bold'}}>
          $15,378.19
        </Text>
        <TouchableOpacity onPress={() => cardHandler()}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1}}
            style={{flex: 1}}>
            {arrayList.map(item => (
              <Logo item={item} key={item.id} />
            ))}
          </ScrollView>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
          <Text style={{fontSize: 20, marginTop: 5, fontFamily: 'Roboto-Bold'}}>
            Activity
          </Text>
          <ScrollView
            horizontal={true}
            style={{marginTop: 5}}
            showsHorizontalScrollIndicator={false}>
            <Image
              source={require('../../assets/images/coin.jpg')}
              style={{
                width: 300,
                height: 200,
                marginHorizontal: 10,
                borderRadius: 20,
              }}
            />
            <Image
              source={require('../../assets/images/coin.jpg')}
              style={{
                width: 300,
                height: 200,
                marginHorizontal: 10,
                borderRadius: 20,
              }}
            />
            <Image
              source={require('../../assets/images/coin.jpg')}
              style={{
                width: 300,
                height: 200,
                marginHorizontal: 10,
                borderRadius: 20,
              }}
            />
          </ScrollView>
        </TouchableOpacity>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, fontFamily: 'Roboto-Bold'}}>
            Tranctions
          </Text>
          <TouchableOpacity onPress={() => setSlide(!slide)}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{color: '#1b64f5'}}>see all</Text>
              <Icon
                name="caret-right"
                style={{fontSize: 15, marginLeft: 3}}
                color="#1b64f5"
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: 10}}>
          <View style={{width: 700}}>
            <Logo
              item={{
                title: 'Shoping',
                text: '3.41pm',
                amount: '-$50.35',
                image: ' ',
              }}
            />
          </View>
          {slide && (
            <>
              <View style={{width: 700}}>
                <Logo
                  item={{
                    title: 'Shoping',
                    text: '3.41pm',
                    amount: '-$50.35',
                    image: ' ',
                  }}
                />
              </View>
              <View style={{width: 700}}>
                <Logo
                  item={{
                    title: 'Shoping',
                    text: '3.41pm',
                    amount: '-$50.35',
                    image: ' ',
                  }}
                />
              </View>
            </>
          )}
        </View>
      </View>
        <Modal
          visible={profile}
          onDismiss={hideModal}
          contentContainerStyle={{backgroundColor:'white',padding:5,height:"100%",width:"70%",position:'absolute',top:0,left:0}}>
          <Menu />
        </Modal>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
});
