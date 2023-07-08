import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import List from './comp/List';
import Welcom from './comp/Welcom';
import ModalDetail from './comp/ModalDetail';

const StackMain = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <StackMain.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
    <StackMain.Screen name  = "Home" component={List}/>
    {/* <StackMain.Screen name = "Welcom" component={Welcom}/> */}
    <StackMain.Screen name = "Modal Detail" component={ModalDetail}/>
    </StackMain.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

