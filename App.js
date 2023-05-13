import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Homescreen from './screens/Homescreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ConnectDetail from './screens/Connect.js/ConnectDetail';
import Profilpost from "./assets/profilPost.png"

import Post from "./screens/Connect.js/Post";
import Recommended from "./screens/Connect.js/Recommended";
import Members from "./screens/Connect.js/Members";
import About from "./screens/Connect.js/About";

const Toptab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const dataUser = [
  {
    name: 'AgusWarewolf',
    role: 'Member',
    dataImage: "https://i.pravatar.cc/100",
    email: '@agusW'
  },
  {
    name: 'Kim Jun Yong',
    role: 'Admin',
    dataImage: "https://i.pravatar.cc/300",
    email: '@KimJongUn'
  },
  {
    name: 'Jun ji hyun',
    role: 'Owner',
    dataImage: "https://i.pravatar.cc/297",
    email: '@Leeminho'
  },
  {
    name: 'AgusWarewolf',
    role: 'Member',
    dataImage: "https://i.pravatar.cc/260",
    email: '@agusW'
  },
  {
    name: 'Kim Jun Yong',
    role: 'Admin',
    dataImage: "https://i.pravatar.cc/240",
    email: '@KimJongUn'
  },
  {
    name: 'Jun ji hyun',
    role: 'Owner',
    dataImage: "https://i.pravatar.cc/370",
    email: '@Leeminho'
  },
  {
    name: 'Jung Nara',
    role: 'Owner',
    dataImage: "https://i.pravatar.cc/260",
    email: '@Nara'
  },
  {
    name: 'Seol',
    role: 'Owner',
    dataImage: "https://i.pravatar.cc/250",
    email: '@Yaseol'
  },
  {
    name: 'Jung Nara',
    role: 'Owner',
    dataImage: "https://i.pravatar.cc/232",
    email: '@Nara'
  },
  {
    name: 'Seol',
    role: 'Owner',
    dataImage: "https://i.pravatar.cc/390",
    email: '@Yaseol'
  },
  {
    name: 'Jung Nara',
    role: 'Owner',
    dataImage: "https://i.pravatar.cc/392",
    email: '@Nara'
  },
  {
    name: 'Jung Nara',
    role: 'Member',
    dataImage: "https://i.pravatar.cc/399",
    email: '@Nara'
  },
  {
    name: 'Seol',
    role: 'Owner',
    dataImage: "https://i.pravatar.cc/401",
    email: '@Yaseol'
  },
]
const ToptabNavigator = () => {
  return (
    <Toptab.Navigator
      tabBarOptions={{
        activeTintColor: '#3AC4A0',
        inactiveTintColor: 'gray',
        style: { backgroundColor: 'white' },
        labelStyle: { fontSize: 8.5, fontWeight: 'bold' },
        indicatorStyle: { backgroundColor: '#3AC4A0' },
        scrollEnabled: true,
      }}
    >
      <Toptab.Screen name='Post' component={Post} initialParams={{ dataUser }} />
      <Toptab.Screen name='Recommended' component={Recommended} initialParams={{ dataUser }} />
      <Toptab.Screen name='Members' component={Members} initialParams={{ dataUser }} />
      <Toptab.Screen name='About' component={About} />
    </Toptab.Navigator>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen name='Home' component={Homescreen} options={{ headerShown: false }} />
          <Stack.Screen name='Detail Circle'>
            {() => (
              <View style={{ flex: 1 }}>
                <ConnectDetail />
                <ToptabNavigator />
              </View>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
