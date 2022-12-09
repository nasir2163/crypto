import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import * as React from 'react';
import Dashboard from './components/Dashboard';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Home from './components/Home';
import Settings from './components/sidebarComponents/settings/Settings';
import Wallet from './components/sidebarComponents/myWallet/Wallet';
import Withdraw from './components/sidebarComponents/withdra/Withdraw';
import Transfer from './components/sidebarComponents/tranfer/Transfer';
import SendMoney from './components/sidebarComponents/tranfer/SendMoney';
import History1 from './components/Home/History';
// import Contact from './components/Home/contact/Contact';
import NewsFeed from './components/Home/NewsFeed';
import Pin from './components/Home/Pin';
import LineChart1 from './components/Home/LineChart';
import ScanItem from './components/Home/ScanItem';
import CardDetails from './components/Home/CardDetails';
// import Scanner1 from './components/Home/scanner/Scanner';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <PaperProvider>
          <Stack.Navigator
            initialRouteName="dash"
            screenOptions={{
              headerTitleAlign:'center',
              headerShadowVisible:false,
              headerTitleStyle:{
                fontSize:20,
                fontWeight:'700'
              }
            }}>
            <Stack.Screen
              name="dash"
              component={Dashboard}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Register"
              component={RegisterPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={LoginPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              
            />
            <Stack.Screen name="Setting" component={Settings} />
            <Stack.Screen name="My Wallet" component={Wallet} />
            <Stack.Screen name="Withdraw" component={Withdraw} />
            <Stack.Screen name="Transfer" component={Transfer} />
            <Stack.Screen name="send_money" component={SendMoney} />
            {/* <Stack.Screen name="contact" component={Contact} /> */}
            <Stack.Screen name="News Feed" component={NewsFeed} />
            <Stack.Screen name="Pin" component={Pin} />
            <Stack.Screen name="Activity" component={LineChart1} />
            <Stack.Screen name="Scan Item" component={ScanItem} />
            <Stack.Screen name="History" component={History1} />
            <Stack.Screen name="Add New Card" component={CardDetails} />
            {/* <Stack.Screen name="contact" component={Scanner1} /> */}
          </Stack.Navigator>
          <Footer />
        </PaperProvider>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    margin: 1,
  },
});
