import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import {SafeAreaView, StyleSheet, View, Dimensions} from 'react-native';
import Home from './screens/Home';
import SendDataScren from './screens/SendDataScreen';

const Stack = createStackNavigator();
const {width, height} = Dimensions.get('window');
const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <SafeAreaView>
          <View style={styles.main}>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="SendData" component={SendDataScren} />
            </Stack.Navigator>
          </View>
        </SafeAreaView>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    width,
    height,
  },
});

export default App;