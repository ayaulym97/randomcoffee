/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import TabNav from './src/navigation/TabNav';
import AuthStackScreen from './src/navigation/AuthStack';
import configureStore from './src/store';
import FuelReportForm from './fuelReport/fuelReportForm';
import axios from 'axios';
const store = configureStore();

const App = () => {
  useEffect(() => {
    load()
  }, []);
  const load = async () => {
    try {
      const resp = await axios.post(
        'https://dev.ciptracker.kz/api/profiles/login',
        {identifier: 'salih-oe', password: 'salihOE123'},

      );
      console.log("RESP",resp)
    } catch (error) {
      console.log("ERROR",error.message)
    }
  };
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
