import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  StatusBar,
} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import SendDataScren from './screens/SendDataScreen';
import LastScreen from './screens/LastScreen';

const Stack = createStackNavigator();
const {width, height} = Dimensions.get('window');
const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <SafeAreaView>
          <StatusBar hidden />
          <View style={styles.main}>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="SendData" component={SendDataScren} />
              <Stack.Screen name="LastScreen" component={LastScreen} />
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
