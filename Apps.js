/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import TabNav from './src/navigation/TabNav';
import AuthStackScreen from './src/navigation/AuthStack';
import configureStore from './src/store';
import FuelReportForm from "./fuelReport/fuelReportForm"
const store = configureStore()



const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        {/* <FuelReportForm /> */}
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
      <TabNav />
      </NavigationContainer>
    </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
